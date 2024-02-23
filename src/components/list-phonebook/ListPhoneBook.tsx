interface IListPhoneBookProps {
  dataPhoneBook: any;
}

const ListPhoneBook = (props: IListPhoneBookProps) => {
  const { dataPhoneBook } = props;

  return <div> {dataPhoneBook.firstName + " " + dataPhoneBook.lastName}</div>;
};

export default ListPhoneBook;
