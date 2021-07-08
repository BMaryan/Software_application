import React, { useState } from "react";
import style from "./Paginator.module.css";

const Paginator = props => {
	let pagesCount = Math.ceil(props.totalItemsCount / props.portionSize);
	let pages = [];

	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

	let portionCount = Math.ceil(pagesCount / props.portionSize);
	let [portionNumber, setPortionNumber] = useState(1);
	let leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1;
	let rightPortionPageNumber = portionNumber * props.portionSize;

	return (
		<div className={style.users_buttons}>
			{portionNumber > 1 && (
				<div className={style.wrapper_over_buttons}>
					<button
						className={style.button_prev}
						onClick={() => {
							setPortionNumber(portionNumber - 1);
						}}>
						&#10094;
					</button>
				</div>
			)}
			{pages
				.filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
				.map(page => {
					return (
						<div
							key={page}
							onClick={e => {
								props.onPageChanged(page);
							}}
							className={props.currentPage === page ? style.selectedPage : style.unselectedPage}>
							{page}
						</div>
					);
				})}

			{portionCount > portionNumber && (
				<div className={style.wrapper_over_buttons}>
					<button
						className={style.button_next}
						onClick={() => {
							setPortionNumber(portionNumber + 1);
						}}>
						&#10095;
					</button>
				</div>
			)}
		</div>
	);
};

export default Paginator;
