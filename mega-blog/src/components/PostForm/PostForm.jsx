import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "..";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
        },
    });

    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);

    const submit = async (data) => {
        if (post) {
            const file = data.image?.[0] ? await appwriteService.uploadFile(data.image[0]) : null;

            if (file) appwriteService.deleteFile(post.featuredImage);

            const dbPost = await appwriteService.updatePost(post.$id, {
                ...data,
                featuredImage: file ? file.$id : undefined,
            });

            if (dbPost) navigate(`/post/${dbPost.$id}`);
        } else {
            const file = await appwriteService.uploadFile(data.image[0]);
            if (file) {
                data.featuredImage = file.$id;
                const dbPost = await appwriteService.createPost({ ...data, userId: userData.$id });
                if (dbPost) navigate(`/post/${dbPost.$id}`);
            }
        }
    };

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s+/g, "-");
        return "";
    }, []);

    useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });
        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);

    return (
        <form onSubmit={handleSubmit(submit)} style={styles.formContainer}>
            <div style={styles.left}>
                <Input
                    label="Title :"
                    placeholder="Title"
                    style={styles.input}
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    style={styles.input}
                    {...register("slug", { required: true })}
                    onInput={(e) => setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true })}
                />
                {/* <RTE
                    label="Content :"
                    name="content"
                    control={control}
                    defaultValue={getValues("content")}
                    style={styles.rte}
                /> */}
                <textarea
                    style={{'padding':'1rem'}}
                    rows='10' 
                    cols='109' 
                    placeholder="Write your content here..."
                    {...register("content", { required: true })}
                />
            </div>
            <div style={styles.right}>
                <Input
                    label="Featured Image :"
                    type="file"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    style={styles.input}
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div style={styles.imagePreviewWrapper}>
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            style={styles.imagePreview}
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    style={styles.select}
                    {...register("status", { required: true })}
                />
                <Button
                    type="submit"
                    style={{ ...styles.button, backgroundColor: post ? "#22C55E" : "#3B82F6" }}
                >
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    );
}

const styles = {
    formContainer: {
        display: "flex",
        flexWrap: "wrap",
        margin: "0 -8px",
    },
    left: {
        width: "66.6667%",
        padding: "0 8px",
        boxSizing: "border-box",
    },
    right: {
        width: "33.3333%",
        padding: "0 8px",
        boxSizing: "border-box",
    },
    input: {
        display: "block",
        width: "100%",
        marginBottom: "16px",
        padding: "10px",
        borderRadius: "6px",
        border: "1px solid #D1D5DB",
        boxSizing: "border-box",
    },
    rte: {
        marginBottom: "16px",
    },
    select: {
        display: "block",
        width: "100%",
        padding: "10px",
        borderRadius: "6px",
        border: "1px solid #D1D5DB",
        marginBottom: "16px",
        boxSizing: "border-box",
    },
    button: {
        display: "block",
        width: "100%",
        padding: "12px",
        borderRadius: "6px",
        border: "none",
        color: "#fff",
        cursor: "pointer",
        fontWeight: "bold",
    },
    imagePreviewWrapper: {
        marginBottom: "16px",
    },
    imagePreview: {
        width: "100%",
        borderRadius: "6px",
    },
};
