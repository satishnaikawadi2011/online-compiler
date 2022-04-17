import { useState } from 'react';

const useApi = (apiFunc: Function) => {
	const [
		data,
		setData
	] = useState();
	const [
		error,
		setError
	] = useState(false);
	const [
		loading,
		setLoading
	] = useState(false);

	const request = async (...args: any) => {
		setLoading(true);
		const response = await apiFunc(...args);
		setLoading(false);

		if (!response?.ok) {
			console.log(response)
			return setError(true);
		}

		setError(false);
		setData(response.data);
	};

	return { data, loading, error, request };
};

export default useApi;