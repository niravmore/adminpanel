import React from 'react'

import Chart from 'react-apexcharts'

import Statuscard from '../components/status_card/Statuscard'

import statusCards from '../assets/JsonData/statuscarddata.json'

const chartOptions = {
	series: [{
		name: 'Online Customers',
		data: [40, 70, 20, 90, 36, 80, 30, 91, 60, 50, 40, 55]
	}, {
		name: 'Store Customers',
		data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10, 25, 45]
	}],
	options: {
		color: ['#6ab04c', '#2980b9'],
		chart: {
			background: 'transparent'
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			curve: 'smooth'
		},
		xaxis: {
			categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
		},
		legend: {
			position: 'top'
		},
		grid: {
			show: false
		}
	}
}

const Dashboard = () => {
	return (
		<div>
			<h2 className='page-header'>Dashboard</h2>
			<div className='row'>
				<div className='col-6'>
					<div className='row'>
						{
							statusCards.map((item, index) => (
								<div className='col-6'>
									<Statuscard
										icon={item.icon}
										count={item.count}
										title={item.title}
									/>
								</div>
							))
						}
					</div>
				</div>
				<div className='col-6'>
					<div className='card full-height'>
						{/*charts*/}
						<Chart
							options={chartOptions.options}
							series={chartOptions.series}
							type='line'
							height='100%'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Dashboard
