import styled from 'styled-components';

export const Content = styled.div`
	position: relative;

    display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	height: 100%;

	&:before,
	&:after {
		position: absolute;
		top: 50%;

		width: 50%;
		overflow: hidden;

		color: var(--text-primary-color);
		font-size: 5rem;
		font-weight: 700;
		text-indent: -15px;
		text-transform: uppercase;

		opacity: 0.04;
		z-index: -1;

		@media only screen and (min-width: 660px) {
			font-size: 7rem;
		}

		@media only screen and (min-width: 1024px) {
			font-size: 9rem;
			text-indent: -20px;
		}

		@media only screen and (min-width: 1440px) {
			font-size: 11.5rem;
			text-indent: -30px;
		}
	}

	&:before {
		content: 'frontend';
		left: 0;
		margin-top: -45px;
		text-align: right;

		@media only screen and (min-width: 660px) {
			margin-top: -70px;
		}

		@media only screen and (min-width: 1024px) {
			margin-top: -90px;
		}

		@media only screen and (min-width: 1440px) {
			margin-top: -120px;
		}
	}

	&:after {
		content: 'developer';
		right: 0;
		margin-top: -13px;
	}
`;

export const Title = styled.h1`
    margin: 15px auto;

	font-size: 3.5rem;
	font-weight: 300;
    text-align: center;
	word-spacing: 15px;
    white-space: nowrap;

    @media only screen and (min-width: 660px) {
        font-size: 8rem;
    }

    @media only screen and (min-width: 1024px) {
		margin: 0 auto;
        width: 900px;
		margin-left: -40px;

		font-size: 11.5rem;
    }

    @media only screen and (min-width: 1440px) {
		width: 1130px;
		margin-left: -45px;

        font-size: 14.5rem;
    }
`;

export const Summary = styled.h2`
	height: 0;
	margin: 0;

	display: flex;
	justify-content: space-evenly;
    flex-wrap: wrap;
	
	line-height: 2.0rem;
	text-align: center;

	font-size: var(--text-mobile-text-size);
	font-weight: 300;

	& > span {
		white-space: nowrap;
		padding: 0 6px;
	}

	@media only screen and (min-width: 1024px) {
		display: block;
		position: relative;
		top: -10px;		
		width: 50%;
		align-self: flex-start;
		padding: 0;

		font-size: var(--text-desktop-text-size);

		& > span {
			padding: 0;
		}

		& > span:not(:first-child) {
			margin-left: 15px;
		}
	}

	@media only screen and (min-width: 1440px) {
		top: -6px;
	}
`;
