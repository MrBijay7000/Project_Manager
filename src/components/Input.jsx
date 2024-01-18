export default function Input({ textarea, label, ...props }) {
  return (
    <p>
      <label>{label}</label>
      {textarea ? <textarea {...props} /> : <input />}
    </p>
  );
}
