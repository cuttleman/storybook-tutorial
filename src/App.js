const Title = ({ title }) => {
  return <div>{title}</div>;
};
const Templete = (args) => <Title {...args} />;
const BindedTitle = Templete.bind({});
console.log(BindedTitle);
BindedTitle.args = {
  title: "bind",
};
console.log(BindedTitle);

function App() {
  return (
    <div className="App">
      <Title title="hello" />
      <BindedTitle />
    </div>
  );
}

export default App;
