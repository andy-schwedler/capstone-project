export default function MagicInput({ label, type, rows, cols, defaultValue }) {
  return (
    <>
      {type === "checkbox" && (
        <>
          <label htmlFor={label}>{label}</label>
          <input
            type="checkbox"
            name={label}
            defaultValue={defaultValue}
            required
          />
        </>
      )}
      {type === "date" && (
        <>
          <label htmlFor={label}>{label}</label>
          <input
            min="2022-01-01"
            max="2023-12-31"
            pattern="\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])*"
            required
            type="date"
            name={label}
            defaultValue={defaultValue}
          />
        </>
      )}
      {type === "text" && (
        <>
          <label htmlFor={label}>{label}</label>
          <input
            type="text"
            name={label}
            defaultValue={defaultValue}
            required
          />
        </>
      )}
      {type === "textarea" && (
        <>
          <label htmlFor={label}>{label}</label>
          <textarea
            rows={rows}
            cols={cols}
            type="text"
            id={label}
            name={label}
            defaultValue={defaultValue}
            required
          />
        </>
      )}
    </>
  );
}
