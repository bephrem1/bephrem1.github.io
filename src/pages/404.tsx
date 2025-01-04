import Head from "next/head";
import { FunctionComponent } from "react";
import NotFound from "../components/page-segments/not-found/NotFound";
import PageBase from "../components/shared/page/PageBase";
import { EmptyObject } from "../types/empty";

const NotFoundPage: FunctionComponent<EmptyObject> = () => {
	return (
		<PageBase>
			<Head>
				<title>bephrem.com | Not Found</title>
			</Head>
			<NotFound />
		</PageBase>
	);
};

export default NotFoundPage;
