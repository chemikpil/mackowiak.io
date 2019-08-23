import styled, { keyframes } from 'styled-components';

const startAnimation = keyframes`
	from { opacity: 0; }
	to { opacity: 1; }
`;

export const Content = styled.div`
	position: relative;

    display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	height: 100%;

	animation: ${startAnimation} 0.5s 1s ease forwards;
	opacity: 0;

	&:before,
	&:after {
		--font-size: 5rem;
		--text-indent: -15px;

		@media only screen and (min-width: 660px) {
			--font-size: 7rem;
		}

		@media only screen and (min-width: 1024px) {
			--font-size: 9rem;
			--text-indent: -20px;
		}

		@media only screen and (min-width: 1440px) {
			--font-size: 11.5rem;
			--text-indent: -30px;
		}

		position: absolute;
		top: 50%;

		width: 50%;
		overflow: hidden;

		color: var(--text-primary-color);
		font-size: var(--font-size);
		font-weight: 700;
		text-indent: var(--text-indent);
		text-transform: uppercase;

		opacity: 0.04;
		z-index: -1;
	}

	&:before {
		--margin-top: -45px;

		@media only screen and (min-width: 660px) {
			--margin-top: -70px;
		}

		@media only screen and (min-width: 1024px) {
			--margin-top: -90px;
		}

		@media only screen and (min-width: 1440px) {
			--margin-top: -120px;
		}

		content: 'frontend';
		left: 0;
		margin-top: var(--margin-top);
		text-align: right;
	}

	&:after {
		content: 'developer';
		right: 0;
		margin-top: -13px;
	}
`;

export const Title = styled.h1`
	--font-size: 3.5rem;
	--width: 100%;
	--margin: 15px auto;

	@media only screen and (min-width: 370px) {
		--font-size: 4.2rem;
	}

	@media only screen and (min-width: 660px) {
        --font-size: 8rem;
    }

	@media only screen and (min-width: 1024px) {
		--font-size: 11.5rem;
		--margin: 0 auto 0 -40px;
		--width: 900px;
	}

	@media only screen and (min-width: 1440px) {
		--font-size: 14.5rem;
		--margin: 0 auto 0 -45px;
		--width: 1130px;
	}

    margin: var(--margin);
	width: var(--width);

	font-size: var(--font-size);
	font-weight: 300;
    text-align: center;
	word-spacing: 15px;
    white-space: nowrap;
`;

export const Summary = styled.h2`
	height: 0;
	margin: 0;

	display: flex;
	justify-content: space-evenly;
    flex-wrap: wrap;
	
	line-height: 2.0rem;
	text-align: center;

	font-size: var(--text-size);
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
