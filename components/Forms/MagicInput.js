export default function MagicInput({
  name,
  type,
  rows,
  cols,
  defaultValue,
  placeholder,
}) {
  return (
    <>
      {type === "checkbox" && (
        <>
          <label htmlFor={name}>{name}</label>
          <input
            type="checkbox"
            name={name}
            defaultValue={defaultValue}
            placeholder={placeholder}
          />
        </>
      )}
      {type === "date" && (
        <>
          <label htmlFor={name}>{name}</label>
          <input
            min="2022-01-01"
            max="2023-12-31"
            pattern="\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])*"
            required
            type="date"
            name={name}
            placeholder={placeholder}
            defaultValue={defaultValue}
          />
        </>
      )}
      {type === "text" && (
        <>
          <label htmlFor={name}>{name}</label>
          <input
            type="text"
            name={name}
            placeholder={placeholder}
            defaultValue={defaultValue}
            required
          />
        </>
      )}
      {type === "textarea" && (
        <>
          <label htmlFor={name}>{name}</label>
          <input
            rows={rows}
            cols={cols}
            type="textarea"
            name={name}
            placeholder={placeholder}
            defaultValue={defaultValue}
            required
          />
        </>
      )}
      {type === "text-not-required" && (
        <>
          <label htmlFor={name}>{name}</label>
          <input
            rows={rows}
            cols={cols}
            type="text"
            name={name}
            placeholder={placeholder}
            defaultValue={defaultValue}
          />
        </>
      )}
    </>
  );
}
