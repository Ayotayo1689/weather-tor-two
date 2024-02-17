import styled from "styled-components";

export const Container = styled.div`
	.navbar {
		transition: transform 0.3s;
	}

	.show {
		transform: translateY(0);
	}

	.hide {
		transform: translateY(-100%);
	}
`;
export const Wrapper = styled.div`
	position: fixed;
	z-index: 1000;
	top: 0;
	left: 0;
  right: 0;
	width: 100%;
  margin: 0 auto;
 
	height: 110px;    

	.mobile-bottom {
		@media (min-width: 1142px) {
			display: none;
		}
	}
`;