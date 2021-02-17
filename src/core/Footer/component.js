export default function Footer() {
  return function teardown() {
    console.log("Callback to teardown");
  };
}
