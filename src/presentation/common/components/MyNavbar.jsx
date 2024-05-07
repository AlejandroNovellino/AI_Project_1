// react bootstrap imports
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
// redux imports
import { useSelector, useDispatch } from "react-redux";
import {
	selectCurrentUser,
	logOut,
} from "../../../application/auth_module/authSlice";
// react router
import { useNavigate } from "react-router-dom";
// import image
import logo from "./../images/Logo.png";

function MyNavbar() {
	// select the auth state
	const user = useSelector(selectCurrentUser);
	// dispatcher
	const dispatcher = useDispatch();
	// react router
	const navigate = useNavigate();

	const handleLogOut = () => {
		try {
			// logout the user
			dispatcher(logOut());
			// logout possible so go to landing
			navigate("/");
		} catch (error) {
			console.error(`There was an error trying to logout ${error}`);
		}
	};

	return (
		<>
			<Navbar bg="dark" data-bs-theme="dark" className="bg-dark-subtle mb-5">
				<Container>
					<Navbar.Brand className="ms-1 pt-2">
						<img
							alt=""
							src={logo}
							width="118"
							height="33"
							className="d-inline-block align-top"
						/>
					</Navbar.Brand>
					{user.token && (
						<Navbar.Collapse className="justify-content-end">
							<Navbar.Text className="me-3">{`Signed in as: ${user.username}`}</Navbar.Text>

							<Button variant="light" onClick={handleLogOut} size="sm">
								<i className="bi bi-box-arrow-left"></i>
								{" Logout"}
							</Button>
						</Navbar.Collapse>
					)}
				</Container>
			</Navbar>
		</>
	);
}

export default MyNavbar;
