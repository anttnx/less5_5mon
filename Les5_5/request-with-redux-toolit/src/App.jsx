import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchData } from './store/userSlice'

const App = () => {
	const users = useSelector((state) => state.users.items)
	const isLoading = useSelector((state) => state.users.isLoading)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchData())
	}, [dispatch])

	if (isLoading) return <div>loading...</div>

	return (
		<div>
			{users.map((item) => (
				<div key={item.id}>
					<p>Email : {item.email}</p>
					<p>Name : {item.name}</p>
				</div>
			))}
		</div>
	)
}

export default App
