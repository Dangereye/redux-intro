import { useSelector } from 'react-redux';

function Customer() {
  const Customer = useSelector((store) => store.customer.fullName);
  return <h2>👋 Welcome, {Customer}</h2>;
}

export default Customer;
