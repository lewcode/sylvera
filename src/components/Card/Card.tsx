const Card: React.FC<React.PropsWithChildren> = ({ children }) => {
	return (
		<div className="flex rounded-2xl bg-gray-50 shadow p-5 border-green-900 border-1">
			{children}
		</div>
	);
};

export default Card;
