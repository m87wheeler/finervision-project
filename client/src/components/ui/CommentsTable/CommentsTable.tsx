import { Container, Table } from "./CommentsTable.style";
import { ICommentsTableProps } from "./CommentsTable.types";

const CommentsTable: React.FC<ICommentsTableProps> = ({ data }) => {
  return (
    <>
      <h2>Comments</h2>
      <Container>
        <Table>
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Name</th>
              <th>Gender</th>
              <th>D.O.B.</th>
              <th>Comment</th>
            </tr>
          </thead>
          <tbody>
            {data.map((res: any, i) => (
              <tr key={res.id} className={i % 2 === 0 ? "shade" : ""}>
                <td>
                  {res.first_name} {res.surname}
                </td>
                <td>{res.email}</td>
                <td>{res.phone}</td>
                <td>{res.gender}</td>
                <td>{`${res.dob}/${res.mob}/${res.yob}`}</td>
                <td colSpan={4}>{res.comments}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default CommentsTable;
