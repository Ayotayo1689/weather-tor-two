import styled from "styled-components";
import {breakpoints} from "./theme";

export const Container = styled.div`
  background: #DB0090;
  color: #fff;
	margin: 0 auto;
	padding: 90px;
	@media (min-width: 992px) {
      
		.hide-desktop {
			display: none;
		}
	}
	@media (max-width: 992px) {
		padding: 2.5rem;
		.hide-mobile {
			display: none;
		}
	}
`;

export const GridOne = styled.div`
	display: grid;
	gap: 1rem;
	max-width: 2000px;
	margin: 0 auto;
  padding-top: 3rem;
  grid-template-columns: repeat(5, 1fr);
  ${breakpoints.md} {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  ${breakpoints.sm} {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
`;




