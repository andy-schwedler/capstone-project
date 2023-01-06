export default function InputText({ label, type, rows, cols }) {
  return (
    <>
      {type === "checkbox" && (
        <>
          <label htmlFor={label}>{label}</label>
          <input type="checkbox" name={label} />
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
          />
        </>
      )}
      {type === "text" && (
        <>
          <label htmlFor={label}>{label}</label>
          <input type="text" name={label} />
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
          />
        </>
      )}
    </>
  );
}
