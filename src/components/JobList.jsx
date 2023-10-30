import { useSelector, useDispatch } from 'react-redux';

import { addFilter } from '../store/filters/filter-actions';
import { selectVisiblePosition } from '../store/positions/position-selectors';
import { selectFilters } from '../store/filters/filter-selectors';

import { JobPosition } from './JobPosition';

const JobList = () => {
	const dispatch = useDispatch();
	const currentFilters = useSelector(selectFilters);
	const positions = useSelector((state) =>
		selectVisiblePosition(state, currentFilters)
	);

	const handleAddFilter = (filter) => {
		dispatch(addFilter(filter));
	};
	return (
		<div className='job-list'>
			{positions.map((item) => (
				<JobPosition key={item.id} onAddFilter={handleAddFilter} {...item} />
			))}
		</div>
	);
};

export { JobList };
