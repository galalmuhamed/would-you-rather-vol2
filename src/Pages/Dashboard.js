import React from 'react';
import { DashboardContainer } from '../Components/Styles/DashboardContainer.styled';
import Questions from '../Components/Questions';

const Dashboard = () => {
	return (
		<DashboardContainer>
			<Questions />
		</DashboardContainer>
	);
};

export default Dashboard;
