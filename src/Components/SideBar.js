import React from 'react';
import {
	SideBarContainer,
	SideUserInfo,
	SideImage,
	SideNav,
} from './Styles/SideBar.styled';
import SideBarOptions from './SideBarOptions';
import SideBarButtons from './SideBarButtons';
import { AiFillHome } from 'react-icons/ai';
import { MdAddCircle, MdLeaderboard } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { Link } from 'react-router-dom';

const SideBar = props => {
	const { AuthedUser, Users } = props;
	const user = AuthedUser ? Users[AuthedUser] : null;

	return (
		<SideBarContainer>
			<SideUserInfo>
				<Link to={`/profiles/${user.id}`}>
					<SideImage
						src={user.avatarURL}
						alt={user.firstName + user.lastName}
					/>
				</Link>
				<p>{`${user.firstName} ${user.lastName}`}</p>
				<p>{user.email}</p>
			</SideUserInfo>
			<SideNav>
				<SideBarOptions to="/" Icon={AiFillHome} text="Dashboard" />
				<SideBarOptions to="/add" Icon={MdAddCircle} text="New Question" />
				<SideBarOptions
					to="/leaderboard"
					Icon={MdLeaderboard}
					text="LeaderBoard"
				/>
				<SideBarOptions to="/profiles" Icon={CgProfile} text="Profiles" />
			</SideNav>
			<SideBarButtons user={user} />
		</SideBarContainer>
	);
};

export default SideBar;

/*


*/
