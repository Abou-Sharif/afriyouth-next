"use client";

import { useCallback } from "react";

export type FieldKind = "text" | "email" | "textarea" | "select";

export type FieldConfig = {
  id: string;
  label: string;
  kind?: FieldKind;
  /** Required fields are validated on submit and get an error message. */
  required?: boolean;
  placeholder?: string;
  /** Message shown when a required field is empty or invalid. */
  error?: string;
  /** Choices for a select. */
  options?: string[];
};

type FieldProps = {
  field: FieldConfig;
  /** `undefined` before the first submit, then whether the value was rejected. */
  invalid?: boolean;
  /** Option text a select should switch to once known (for example from the URL). */
  preselect?: string | null;
};

const autoComplete = (field: FieldConfig) =>
  field.kind === "email" ? "email" : field.id.endsWith("name") ? "name" : "off";

/** Label, control and error line. The error id is `<id>-e` and is linked with aria-describedby. */
export function Field({ field, invalid, preselect }: FieldProps) {
  const { id, label, kind = "text", required = false, placeholder, error, options = [] } = field;
  const errorId = `${id}-e`;
  const aria = {
    "aria-invalid": invalid,
    "aria-describedby": invalid ? errorId : undefined,
  };

  // Stable callback, so a re-render never resets what the visitor picked.
  const applyPreselect = useCallback(
    (el: HTMLSelectElement | null) => {
      if (!el || !preselect) return;
      const index = Array.from(el.options).findIndex((o) => o.text === preselect);
      if (index >= 0) el.selectedIndex = index;
    },
    [preselect],
  );

  return (
    <div className={`field${invalid ? " bad" : ""}`}>
      <label htmlFor={id}>{label}</label>
      {kind === "textarea" ? (
        <textarea
          id={id}
          name={id}
          rows={5}
          placeholder={placeholder}
          data-req={required || undefined}
          {...aria}
        />
      ) : kind === "select" ? (
        <select id={id} name={id} ref={applyPreselect}>
          {options.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          name={id}
          type={kind === "email" ? "email" : "text"}
          placeholder={placeholder}
          autoComplete={autoComplete(field)}
          data-req={required || undefined}
          data-email={kind === "email" || undefined}
          {...aria}
        />
      )}
      {required && (
        <p className="err" id={errorId} hidden={!invalid}>
          {error ?? "Please fill this in."}
        </p>
      )}
    </div>
  );
}
