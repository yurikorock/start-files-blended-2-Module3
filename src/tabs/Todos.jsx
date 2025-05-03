import Text from '../components/Text/Text';
import Form from '../components/Form/Form';
import TodoList from '../components/TodoList/TodoList';

const Todos = () => {
  const todos = [
    { id: '1', text: 'Practice more' },
    { id: '2', text: 'Get all tasks done on time' },
  ];

  // const [todos, setTodos] = useState([]);

  const addNewTodo = inputValue => {
    console.log(inputValue);
  };
  return (
    <>
      <Form onSubmit={addNewTodo} />
      <TodoList todos={todos} />
      <Text textAlign="center">There are no any todos ...</Text>
    </>
  );
};

export default Todos;
