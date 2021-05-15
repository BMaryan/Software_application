import preloader from "../../../assets/images/Spin-1s-64px.svg";

let Preloader = props => {
	return (
		<div style={{ display: "flex", justifyContent: "center" }}>
			<img src={preloader} alt='' />
		</div>
	);
};

export default Preloader;
