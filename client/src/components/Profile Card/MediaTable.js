import 'bootstrap/dist/css/bootstrap.min.css';
import './MediaTable.css';

export default function MediaTable(props) {
    return (
      <table className="table table-hover">
        <tbody>
          <tr>
            <th scope="row">Title</th>
            <td>{props.title}</td>
          </tr>
          <tr>
            <th scope="row">Category</th>
            <td>{props.type}</td>
          </tr>
          <tr>
            <th scope="row">Description</th>
            <td>{props.description}</td>
          </tr>
    
          <tr>
            <th scope="row">Proccess</th>
            <td>
              {props.current} out of {props.goal}
            </td>
          </tr>
          <tr>
            <th scope="row">Remaining day</th>
            <td>
              {props.day} days
            </td>
          </tr>
        </tbody>
      </table>
    );
};