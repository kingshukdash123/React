import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'

export default function RTE({ name, control, label, defaultValue = "" }) {
  return (
    <div style={styles.wrapper}>
      {label && (
        <label style={styles.label}>
          {label}
        </label>
      )}

      <Controller
        name={name || "content"}
        control={control}
        render={({ field: { onChange } }) => (
          <Editor
            initialValue={defaultValue}
            init={{
              height: 500,
              menubar: true,
              plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "help",
                "wordcount",
              ],
              toolbar:
                "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
              content_style:
                "body { font-family: Helvetica, Arial, sans-serif; font-size: 14px }",
            }}
            onEditorChange={onChange}
          />
        )}
      />
    </div>
  )
}

const styles = {
  wrapper: {
    width: "100%",
  },

  label: {
    display: "inline-block",
    marginBottom: "4px",   // mb-1
    paddingLeft: "4px",    // pl-1
    fontSize: "14px",
    fontWeight: "500",
    color: "#111827",      // gray-900
  },
}
