import 'bootstrap/dist/css/bootstrap.min.css';
import './MediaTable.css';

export default function MediaTable(props) {
    return (
        <table className='table table-hover'>
            <tbody>
                {/* <tr>
                    <th scope="row">{props.title}</th>
                    <td>
                        {props.title}
                    </td>
                </tr> */}
                <tr>
                    <th scope="row">Title</th>
                    <td>
                        {props.title}
                    </td>
                </tr>
                <tr>
                    <th scope="row">Category</th>
                    <td>
                        {props.type}
                    </td>
                </tr>
                <tr>
                    <th scope="row">Description</th>
                    <td>
                            {props.description}
                    </td>
                </tr>
                {/* <tr>
                    <th scope="row">Area</th>
                    <td>{props.area}</td>
                </tr>
                <tr>
                    <th scope="row">Price</th>
                    <td>
                        {props.price
                        ? props.price.toLocaleString("it-IT", {
                        style: "currency",
                        currency: "VND",
                        })
                        : props.price}{" "}
                        / year</td>
                </tr> */}
                <tr>
                    <th scope="row">Proccess</th>
                    <td>
                        {props.current} out of {props.goal}
                    </td>
                </tr>
            </tbody>
        </table>
    )
};