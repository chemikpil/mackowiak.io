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
		margin-top: -55px;
		text-align: right;

		@media only screen and (min-width: 660px) {
			margin-top: -80px;
		}

		@media only screen and (min-width: 1024px) {
			margin-top: -100px;
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
    margin: 0 auto;

	font-size: 3.5rem;
	font-weight: 300;
    text-align: center;
	word-spacing: 15px;
    white-space: nowrap;

    @media only screen and (min-width: 660px) {
        font-size: 8rem;
    }

    @media only screen and (min-width: 1024px) {
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
