import type React from "react";
import type { PropsWithChildren } from "react";

const PageContainer: React.FC<React.PropsWithChildren> = ({ children }) => {
	return (
		<div className="h-dvh mx-2 md:mx-10 lg:mx-20 my-10 flex justify-center content-center">
			{children}
		</div>
	);
};

export default PageContainer;
