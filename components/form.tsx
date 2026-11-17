"use client";

import { useState } from "react";
import { Field, type FieldConfig } from "./field";
import { Icon } from "./icon";

const EMAIL = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

/** A required text field needs two characters or more; an email must look like one. */
export function isValid(field: FieldConfig, value: string): boolean {
  const v = value.trim();
  return field.kind === "email" ? EMAIL.test(v) : v.length > 1;
}

type FormProps = {
  id: string;
  fields: FieldConfig[];
  submitLabel: string;
  /** `card` is the titled panel, `inline` a single row with the button beside the field. */
  variant?: "card" | "inline";
  title?: string;
  intro?: string;
  bordered?: boolean;
  /** Passed to every select field, see `Field`. */
  preselect?: string | null;
};

/**
 * Validates on submit and shows a thank-you note. This is a design sample, so
 * nothing is sent anywhere.
 */
export function Form({
  id,
  fields,
  submitLabel,
  variant = "card",
  title,
  intro,
  bordered = false,
  preselect,
}: FormProps) {
  const [invalid, setInvalid] = useState<Record<string, boolean> | null>(null);
  const [sent, setSent] = useState(false);
  const inline = variant === "inline";

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const next: Record<string, boolean> = {};
    for (const f of fields) {
      if (f.required) next[f.id] = !isValid(f, String(data.get(f.id) ?? ""));
    }
    const ok = !Object.values(next).some(Boolean);
    setInvalid(next);
    setSent(ok);
    if (ok) form.reset();
  };

  return (
    <form
      className={inline ? "inline-form" : `form${bordered ? " bordered" : ""}`}
      id={id}
      onSubmit={onSubmit}
      noValidate
    >
      {title && <h3>{title}</h3>}
      {intro && <p className="intro">{intro}</p>}
      {fields.map((f) => (
        <Field
          key={f.id}
          field={f}
          invalid={invalid ? invalid[f.id] : undefined}
          preselect={f.kind === "select" ? preselect : undefined}
        />
      ))}
      <button className="btn btn-solid" type="submit">
        {submitLabel}
        <Icon name="send" />
      </button>
      <p
        className="sent"
        role="status"
        hidden={!sent}
        style={inline ? { flexBasis: "100%" } : undefined}
      >
        Thank you. This is a design sample, so nothing was sent.
      </p>
    </form>
  );
}
