import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent } from "react";
import React from "react";
import { INTERNAL_LINKS } from "../../../helpers/urls";
import { EmptyObject } from "../../../types/empty";
import Link from "../../shared/elements/Link";
import SiteLayout from "../../shared/layout/SiteLayout";
import Navbar from "../../shared/navigation/Navbar";

const NotFound: FunctionComponent<EmptyObject> = () => {
	return (
		<SiteLayout>
			<Navbar />

			<div className="flex flex-col flex-grow w-full items-center justify-center">
				<div className="flex flex-col w-fit">
					<div className="flex flex-row items-center mb-3">
						<h1 className="text-neutral-100 text-lg font-semibold select-none">
							404
						</h1>
						<Divider />
						<p className="text-neutral-400 bg-opacity-50 text-md select-none text-nowrap">
							Page not found
						</p>
					</div>
					<div className="flex justify-end w-full">
						<GoHomeLink />
					</div>
				</div>
			</div>
		</SiteLayout>
	);
};

const GoHomeLink = () => {
	return (
		<Link type="internal" dest={INTERNAL_LINKS.HOME}>
			<div className="flex flex-row items-center">
				<p className="text-neutral-100 text-sm text-nowrap mr-1.5">Go Home</p>
				<FontAwesomeIcon
					icon={faArrowRightLong}
					className="text-neutral-100"
					style={{ width: "12px", height: "12px" }}
				/>
			</div>
		</Link>
	);
};

const Divider = () => {
	return <div className="w-1 h-1 bg-neutral-100 mx-2 rounded-full" />;
};

export default NotFound;
