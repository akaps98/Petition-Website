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
                    <th scope="row">Category</th>
                    <td>
                        National
                    </td>
                </tr>
                <tr>
                    <th scope="row">Category</th>
                    <td>
                        {props.description}
                    </td>
                </tr>
                <tr>
                    <th scope="row">Description</th>
                    <td>
                    Arizona is besieged by illegal immigration--more people and drugs cross illegally into the United States through Arizona than any other state. And Arizonans suffer the massive levels of crime that go with it. Drug and human smuggling, extortion, kidnapping and murders. And the Federal government has done NOTHING to stop it. <br></br><br></br>

                    Arizonans have had enough. They decided to stop waiting for the Feds to do what the Constitution mandates--to protect its citizens from external threats. So they passed legislation to help stop the robberies, shootings, rapes, kidnapping, murders, and madness. <br></br><br></br>

                    This isn't about racism, or xenophobia, or "apartheid" or any of the other hysterical slanders the left has come up. This is about the safety and well-being of the citizens of the state. And its support was overwhelming: 70% of Arizonans supported it. And support is Bi-Partisan, with 84% of Republicans and 51% of Democrats in favor. <br></br><br></br>

                    But some have now come out and called for a boycott of Arizona. Incredibly, even one of its own U.S. Representatives--Rep. Raul Grijalva has joined this call for a boycott--of his own state!
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
                    <th scope="row">Description</th>
                    <td>
                        {props.description}
                    </td>
                </tr>
            </tbody>
        </table>
    )
};