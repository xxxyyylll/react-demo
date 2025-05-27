export default function Signup() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("提交表单！");
      }}
    >
      <input style={{ borderColor: "black", borderWidth: "medium" }} />
      <button>发送</button>
    </form>
  );
}
