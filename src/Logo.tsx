import { view } from "motion/react-client";
import "./App.css";

interface LogoProps {
  height?: string;
  width?: string;
  introAnimate?: boolean;
}

export const Logo = ({
  width = "331",
  height = "240",
  introAnimate = true,
}: LogoProps) => {
  return (
    <div className={introAnimate ? "initialLoadLogo" : "logo"}>
      <svg
        version="1.2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 993 722"
        width={width}
        height={height}
      >
        <g id="tape (1)">
          <path
            id="tape fnl"
            d="m681 37.4c4.1 0.2 10 0.9 13 1.4 3 0.6 7.5 1.4 10 1.7 2.6 0.3 7.2 2.1 10.9 4.3 3.5 2 9.3 6.4 12.9 9.7 3.6 3.3 9.7 10.3 13.6 15.5 3.9 5.2 10.5 14.9 14.7 21.5 4.1 6.6 10.4 16.7 14 22.4 3.5 5.7 6.7 10.5 7.1 10.7 0.5 0.2 2-0.6 3.4-1.9 1.5-1.2 10-10.3 18.9-20.2 8.9-9.9 19.1-20.7 22.6-24 3.6-3.3 8.7-7.1 11.4-8.5 4.3-2.1 6.7-2.6 16.5-2.9 6.3-0.2 19.1 0.2 28.5 0.9 9.3 0.6 18.6 1.6 20.5 2 1.9 0.5 6.2 2.7 9.5 4.8 3.3 2.1 8.2 6.2 11 9.1 2.7 2.8 7 8 9.3 11.4 2.4 3.4 6.1 9.6 8.2 13.7 2 4.1 5.1 11.5 6.8 16.5 1.7 4.9 3.8 12.4 4.7 16.5 0.9 4.1 2.5 15.1 3.6 24.5 1.8 15.4 1.9 18.9 0.9 37-0.6 11-1.5 23.8-2 28.5-0.5 4.7-3 18.4-5.5 30.5-2.5 12.1-6.4 31-8.6 42-2.2 11-5.8 27.6-8 37-2.2 9.3-5.8 26.9-8 39-2.2 12.1-6.5 32.6-9.5 45.5-3.1 12.9-6.2 28.4-7.1 34.5-0.8 6-3.7 24-6.4 40-2.8 15.9-6.4 35.1-8 42.5-1.6 7.4-4.3 18.3-5.9 24.2-1.7 6-4.1 13.6-5.3 17-1.3 3.5-3.7 8.5-5.3 11.3-1.6 2.7-5.4 7.5-8.4 10.5-3.2 3.3-8 6.8-11.5 8.4-3.3 1.6-8.5 3.7-11.5 4.8-3 1-10.2 2.4-16 3-5.8 0.5-16.1 0.8-23 0.5-7.2-0.3-17.5-1.6-24.5-3-6.6-1.4-14.7-3.5-18-4.8-3.3-1.3-9-4.7-19.5-12.9l-7.8 6.2c-4.2 3.5-10.2 7.8-13.2 9.6-3 1.8-9.1 4.6-13.5 6.3-4.4 1.7-11.6 3.7-16 4.5-4.4 0.7-14.3 1.8-22 2.4-11.8 0.9-15.6 0.8-24-0.5-5.5-0.9-13.4-2.7-17.5-4.1-4.1-1.4-11.6-5-25.5-13.5l-3.6 2.3c-1.9 1.3-4.8 4.1-6.4 6.3-1.6 2.2-4.7 6.7-6.9 10-2.1 3.3-6.3 8.7-9.1 12-3 3.5-9.4 8.8-15.1 12.7-7.1 4.8-12.5 7.5-18.9 9.7-5 1.6-12.8 3.4-17.5 4-4.7 0.6-13.5 1.1-19.5 1.1-6.1 0-18.2-0.5-27-1-8.8-0.6-21.4-1.9-28-3-6.6-1.1-15.2-3-19-4.3-3.9-1.3-11.3-4.5-16.5-7-5.2-2.5-13-6.6-17.3-9.1-5.2-3.1-9-6.3-15.9-15.1l-8.9 3.2c-4.9 1.8-14.1 4.2-20.4 5.3-6.3 1.1-12.5 2.7-13.8 3.6-1.3 0.9-5 5.1-8.3 9.3-3.2 4.2-9.2 11.2-13.2 15.6-3.9 4.4-11.6 12-17 16.8-6.6 6-11.3 9.4-14.7 10.6-2.8 1-8.2 2.4-12 3.1-6 1-8.1 0.9-14.5-0.5-4.1-1-13.4-3.3-20.5-5.2-7.2-1.9-17.7-5-23.5-6.9-5.8-1.9-12.8-4.8-15.5-6.3-2.8-1.5-6.8-3.4-9-4.1-2.2-0.7-8.7-3.6-14.5-6.6-5.8-2.9-12.5-6.8-15-8.7-2.5-1.9-9.2-5.9-15-8.9-5.8-3-13.2-7.3-16.5-9.6-3.3-2.3-8.9-6.5-12.5-9.2-3.6-2.7-8.7-6.7-11.4-8.7-2.7-2.1-11.5-10.3-19.5-18.3-8-8-17.1-17.7-20.2-21.5-3.1-3.9-9.1-12.2-13.3-18.5-5.5-8.3-8.4-13.8-10.2-19.5-1.7-5.4-2.8-11.3-3.1-18-0.3-5.5 0-16.1 0.6-23.5 0.6-7.4 2.2-18 3.5-23.5 1.4-5.5 3.9-14.1 5.6-19 1.8-5 4.6-11.5 6.3-14.5 1.7-3 9-14.3 16.2-25 7.3-10.7 16.3-24.5 20-30.5 3.7-6.1 10.2-18 14.3-26.5 4.1-8.5 10.1-22.7 13.3-31.5 3.3-8.8 7.6-20.3 9.6-25.5 1.9-5.2 5-12 6.8-15 1.8-3 6-10.9 9.5-17.5 3.5-6.6 8.9-16.5 12.1-22 3.2-5.5 6.1-11.4 6.4-13 0.4-1.7-0.1-9.8-1.1-18-1-8.3-1.8-20.2-1.8-26.5-0.1-10.5 0.2-12.3 3.2-20.5 1.8-5 4.7-11.4 6.5-14.3 1.7-2.9 6.7-9.2 11.1-14 4.3-4.8 14.6-15.6 23-24.1 8.6-8.8 18.1-17.4 22.1-20 3.8-2.6 9.7-5.9 13-7.4 3.3-1.4 10-3.6 15-4.7 7.7-1.9 10.7-2.1 20.5-1.5 6.3 0.3 16.4 1.3 22.5 2.1 6 0.8 14.4 2.5 18.5 3.9 4.1 1.4 12 5 17.5 7.9 5.5 2.9 14.5 8.2 20 11.8 5.5 3.6 14 9.5 28 19.6l14.4-21.6c7.9-12 17.4-25.8 21.1-30.7 3.7-5 8.9-11.4 11.6-14.4 3.7-4.1 7.1-6.4 13.9-9.7 4.9-2.3 13.9-5.7 20-7.4 6-1.8 14.8-3.6 19.5-4.2 4.7-0.6 12.8-0.8 18-0.6q9.5 0.5 15.5 2.7c3.3 1.2 8.5 3.6 11.5 5.4 3.4 2 15.5 13.1 32.5 30 14.8 14.7 27.6 26.8 28.2 26.7 0.7 0 3.7-2.6 6.5-5.8 2.9-3.2 11.8-13.6 19.8-23.3 7.9-9.6 16-18.8 18-20.4 1.9-1.6 6.4-5.4 10-8.6 3.6-3.1 8.5-6.9 11-8.5 2.5-1.5 8.3-4 13-5.5 6.9-2.3 9.9-2.8 16-2.5zm-23.4 30.6c-3.2 1.9-8.4 6.3-11.5 9.8-3.1 3.5-7.5 9.1-9.9 12.5-2.4 3.4-9.3 11.8-15.5 18.6-6.2 6.8-12.6 14.4-14.4 17-2 2.8-4 7.7-5.2 12.6-1 4.4-2.2 9.3-2.5 11-0.2 1.6-0.2 3.6 0.2 4.3 0.6 1 2 0.9 7.2-0.8 3.6-1.2 11.2-3.2 17-4.5 5.8-1.3 14.5-2.9 19.5-3.6 5.2-0.8 18.6-1.3 32-1.4 19 0 24.4 0.3 31 1.9 4.4 1 12.5 3.4 18 5.2 5.5 1.9 14.5 5.9 20 8.8 5.5 2.9 11.5 6.2 13.3 7.2 2.8 1.7 3.4 1.7 4.2 0.4 0.5-0.8 1.2-3.8 1.6-6.5 0.5-4 0.3-5.9-1.4-9.5-1.2-2.5-2.2-5-2.2-5.5 0-0.6-2.7-6.4-6-13-3.2-6.6-7.6-14.5-9.7-17.7-2.1-3.1-7.4-10.9-11.8-17.4-4.4-6.5-11.4-15.2-15.5-19.4-4.1-4.2-9.4-8.7-11.8-9.8-2.3-1.2-6.8-2.9-10-3.7-3.1-0.8-9.3-1.7-13.7-2-4.9-0.3-9.7 0-12.5 0.8-2.5 0.7-7.1 2.8-10.4 4.7zm-172.6 10c-6.3 0.6-15.3 2-20 3-4.7 0.9-10.3 2.7-12.5 3.8-2.2 1.2-5 2.9-6.2 3.9-1.2 1-6.3 7-11.3 13.3-5 6.3-10.7 14.2-12.7 17.5-2 3.3-4.9 7.6-6.3 9.5-1.5 1.9-3.9 5.7-5.3 8.5-1.3 2.7-3.4 7.9-4.5 11.5-1.1 3.6-2.5 12.5-3.2 20-0.8 9.9-0.9 40.4-0.3 113.5 0.5 55 0.8 131.3 0.7 169.5-0.1 38.2 0.2 87.3 0.8 109 0.5 21.7 1.3 43.3 1.9 48 0.5 4.7 1.5 9.4 2.3 10.5 0.7 1.1 4.4 3.7 8.2 5.8 3.8 2.1 9.8 4.9 13.4 6.3 3.6 1.3 8.7 3.5 11.5 4.8 3.9 1.9 8.7 2.8 22 4.1 9.3 1 26.2 1.8 37.5 1.9 19.4 0.1 21.1-0.1 32.5-2.8l12-2.9c11.3-11.5 15.8-17.4 18.8-22.7 2.6-4.7 5.6-11.4 6.8-15 1.1-3.6 3-11 4.2-16.5 2.2-9.9 2.2-10.5 2.2-107-0.1-69.5-0.4-101.7-1.4-113.5-0.7-9.1-1.8-21.2-2.6-27-1-8.3-1.1-18.7-0.3-50 0.6-26.4 0.6-45.3-0.1-57-0.7-12.1-0.7-21.8 0.1-31.5 0.7-10.2 0.7-18.1-0.2-29-0.6-8.3-1.6-17.9-2.1-21.5-0.6-3.6-2-8.8-3.3-11.5-1.3-2.8-3.8-6.8-5.5-9-1.8-2.2-9.2-10.3-16.4-17.9-9.8-10.4-15.5-15.5-22.2-19.9-5-3.2-11-6.9-13.5-8.2-2.5-1.2-6.3-2.6-8.5-2.9-2.2-0.4-4.3-0.5-4.5-0.2-0.3 0.3-5.7 1-12 1.6zm357.7 13.7c-1.7 0.9-8.6 6.9-15.2 13.4-6.6 6.4-15.1 15.5-18.8 20.1-3.8 4.6-9.3 12.6-12.3 17.8-3 5.2-6.1 11.7-6.9 14.5-0.8 2.7-2.6 9.9-4 16-1.4 6-3.4 20-4.5 31-1 11-2.4 27.4-3 36.5-0.6 9.1-1.9 26.6-3 39-1.1 12.4-2.4 33.1-3 46-0.6 12.9-1.7 35.6-2.5 50.5-0.9 14.8-2.2 37.1-3 49.5-0.8 12.4-1.5 26.3-1.5 31v8.5c5-1.3 8.5-2.1 11-2.6 2.5-0.4 9.7-0.8 16-0.9 8.2 0 13 0.5 16.5 1.6 2.7 0.9 5.7 2.2 6.5 2.9 0.8 0.6 4.1 2.5 7.4 4.1 3.2 1.6 6.9 4.1 8.2 5.6 1.3 1.6 3.3 5.8 4.4 9.5 1.2 3.8 2.8 11.1 3.6 16.3 1.1 6.4 1.4 12.9 1.1 20-0.5 9.5-1 11.9-5.6 24.5-2.9 7.7-6.6 16.1-8.4 18.7-2.3 3.4-4.2 5.1-6.7 5.8-1.9 0.5-6.5 1-10.3 1-3.7 0-11.3-0.9-17-2-5.6-1.1-15.6-2.4-22.2-2.9-7.3-0.6-12.9-0.6-14.3 0-1.9 0.8-2.2 1.6-2.2 6.1 0 2.9 0.4 5.8 0.8 6.4 0.4 0.5 4.5 2.6 9.2 4.6 4.7 1.9 9.8 4 11.5 4.6 1.6 0.6 7.3 2.3 12.5 3.9 8.8 2.6 10.8 2.8 26.5 2.8 14.8 0 17.5-0.2 20.5-1.9 1.9-1 5-3.1 6.9-4.5 1.9-1.4 5.1-4.6 7.1-7.1 2.5-3.2 4.6-7.8 7.3-16 2-6.3 4.3-15.3 5.2-20 0.8-4.7 2.3-12.6 3.4-17.5 1-5 4.4-18.7 7.5-30.5 3-11.8 7.5-30.5 10-41.5 2.4-11 5.6-26.5 7-34.5 1.4-8 3.7-22.4 5.1-32 1.4-9.6 3.7-23.8 5.1-31.5 1.4-7.7 5.4-25.5 8.9-39.5 3.5-14 7.5-32.9 9-42 1.4-9.1 3.7-21.5 5-27.5 1.3-6.1 3.1-18.9 4-28.5 0.8-9.6 2-25.6 2.6-35.5 0.6-9.9 0.9-21.2 0.6-25-0.3-3.9-2.2-12.4-4.2-19-2-6.6-5.9-16.7-8.7-22.5-2.8-5.8-6.6-12.9-8.4-15.8-1.9-2.8-4.4-5.9-5.7-6.7-1.2-0.8-4.9-2.4-8.2-3.6-3.3-1.1-10.3-2.7-15.5-3.4-5.2-0.7-11.8-1.6-14.5-1.8-2.8-0.3-7.8 0.1-11.3 0.9-3.4 0.8-7.7 2.1-9.5 3.1zm-594.7 32.7c-6.6 3.4-10.3 6.7-30.5 27-14.9 15-24.9 25.9-28.5 31.1l-5.4 8c1.9 38 3.1 54.2 4 60.5 0.8 6.3 2.6 18.9 4 28 1.4 9.1 3.4 19.6 4.5 23.5 1.1 3.8 3.1 11.5 4.5 17 1.4 5.5 4.5 19.7 7 31.5 2.5 11.8 6 28 7.9 36 1.9 8 4 16.1 4.8 18 0.8 1.9 2.2 7.3 3.2 12 0.9 4.7 2.1 10.2 2.6 12.2 0.5 2.3 1.8 4.3 3.1 4.9 1.3 0.7 7.5 2.6 13.8 4.4 6.3 1.7 19.3 5.5 28.7 8.3 9.5 2.9 19.2 6.2 21.5 7.3 2.4 1.2 7.2 4.3 10.8 6.8 3.6 2.6 10.9 7.2 16.4 10.2 5.4 3 10.5 6.1 11.3 6.9 0.8 0.8 2.4 3.1 3.5 5 1.2 1.9 4.1 7.4 6.5 12.2 2.4 4.9 4.3 9.7 4.3 10.8 0 1.1 1.3 6.2 3 11.2 1.6 5.1 3.4 10.6 3.9 12.3 0.5 1.6 1.5 7 2.3 12 0.8 5.4 1.2 16.6 1.2 28-0.1 17.4-0.4 19.9-3 30.2l-2.9 11.3c3.5 0 7.6-0.7 11.5-1.5 3.8-0.8 7.9-2 9-2.5 1.1-0.6 2.8-2.5 3.7-4.3 1.7-3 1.8-9.1 1.8-87.2 0-46.2-0.1-102.5-0.2-125-0.1-22.6-0.1-76.8 0-120.5 0.1-60.3-0.1-81.3-1.1-87-0.7-4.1-2.3-9.8-3.7-12.5-1.3-2.8-6-8.7-10.7-13.6-4.6-4.7-12.7-12.3-18.1-17-6.8-5.8-13.3-10.3-21.5-14.6l-11.7-6.3c-29.5 0.2-41.6 0.6-46 0.9-6.6 0.6-9.3 1.4-15.5 4.5zm381 49.1c-5.2 1.4-12.7 3.8-16.5 5.1-3.9 1.4-8.5 3.5-10.4 4.7-1.9 1.2-4 3.1-4.8 4.2-1 1.6-1.3 9.6-1.3 39 0 20.3 0.5 41.3 1 46.5 0.4 5.2 1.4 21.4 2 36 0.7 14.6 1.5 40.2 1.8 57l0.7 30.6c23.2-4.3 35.2-6 41.5-6.5 6.3-0.6 18.8-1.1 27.7-1.1 12.9 0 19.4 0.5 31 2.5 8.2 1.4 21.2 4 29 5.8 7.8 1.7 14.4 3 14.6 2.7 0.3-0.3 1-10.2 1.6-22 0.7-11.8 1.9-31.6 2.7-44 0.8-12.4 2.8-36.9 4.5-54.5 2-20.4 3.2-38.5 3.3-50 0.1-16.2-0.1-18.4-1.9-22-1.1-2.1-4-6.1-6.5-8.8-2.5-2.7-7-6.4-10-8.3-3-1.8-10.2-5.3-16-7.7-5.8-2.4-13.9-5.4-18-6.6-4.1-1.1-12.2-3-18-4.1-6-1.2-16.3-2.2-24-2.5-7.4-0.2-16 0-19 0.5-3 0.5-9.8 2-15 3.5zm-473.3 127.5c-2.5 4.7-8.2 18.4-12.7 30.5-4.5 12.1-9.4 24.2-10.7 27-1.4 2.7-4.7 10.4-7.3 17-2.6 6.6-6.4 15.4-8.3 19.5-1.9 4.1-5.3 9.7-7.4 12.5-2.2 2.7-6.1 8.6-8.9 13-2.7 4.4-7.2 10.5-10.1 13.5-2.9 3-5.2 5.8-5.3 6.2 0 0.5-2.7 5.6-5.9 11.5-3.3 6-6.9 13.7-8.2 17.3-1.2 3.6-2.8 7.2-3.5 8-0.7 0.8-1.8 3.7-2.3 6.5-0.5 2.7-1.5 14-2.2 25-1 16-0.9 21.3 0.1 26.5 0.8 4.6 2.8 9.2 6.6 15.5 2.9 4.9 7.6 12.4 10.3 16.5 2.8 4.1 10.1 12.8 16.3 19.4 6.3 6.5 14.9 14.3 19.3 17.4 4.4 3.1 9.6 7.1 11.5 8.8 1.9 1.8 5.7 4.8 8.5 6.7 2.7 2 7.2 5.1 10 6.9 2.7 1.9 7 4.1 9.5 5.1 2.5 0.9 6.1 2.8 8 4.2 1.9 1.4 5.3 3.3 7.5 4.4 2.2 1 10.1 4.4 17.5 7.6 7.4 3.2 18 8.2 23.5 11.1 5.5 2.9 13.8 6.7 18.5 8.4 4.7 1.7 12.1 4 16.5 5 4.4 1 10.5 2.1 13.5 2.5 5.3 0.6 5.9 0.4 15-4.7 7.3-4.1 11.7-7.6 19.5-15.3 5.5-5.5 11.7-12 13.6-14.5 2-2.5 5.3-7 7.4-10 2.1-3 5.3-8.4 7-12 1.8-3.6 3.8-9.7 4.5-13.5 0.7-3.9 2.1-10.2 3.1-14 1.1-3.9 2.4-14 3-22.5 1.1-14.5 1-16-1-23.5-1.1-4.4-2.7-12.3-3.6-17.5-0.9-5.2-2.4-11.9-3.3-14.8-1-3.1-2.6-5.9-4-6.8-1.2-0.8-3-2.8-4-4.6-0.9-1.7-6.4-6.9-12.2-11.4-8-6.4-12.7-9.3-20-12.3-5.2-2.2-13.3-5.2-18-6.6-4.7-1.5-10.2-3.6-12.3-4.6-2-1.1-10.1-3.2-18-4.9-7.8-1.6-17.1-3.9-20.7-5.1-3.6-1.2-14.4-4.1-24-6.5-9.6-2.5-18.8-5.2-20.4-6.2-1.6-0.9-4.1-3.9-5.5-6.6l-2.6-4.8c3.9-3 7-4.3 9.5-4.7 2.5-0.5 8.8-1.3 14-1.6 5.2-0.4 10.1-1.3 10.8-1.9 0.7-0.6 1.3-2 1.3-3.1-0.1-1.1-1.2-5.2-2.5-9-1.4-3.9-3.7-13.3-5.1-21-1.4-7.7-4.9-25.5-7.7-39.5-2.7-14-5.8-27.8-6.8-30.5-1-2.8-2.8-9.8-3.9-15.8-1.2-5.9-2.9-12.4-3.9-14.4-0.9-2-2.2-3.8-2.8-4-0.6-0.2-2.3 1.1-3.7 2.9-1.4 1.8-4.5 7.1-7 11.8zm480.3 118.4c-5.2 0.9-13.8 2.8-19 4.2-5.2 1.5-10.5 2.9-11.7 3.3-1.3 0.3-2.5 1.5-2.8 2.6-0.3 1.1-0.9 12.5-1.3 25.3-0.6 20.3-0.5 23.2 0.8 23.2 0.8 0.1 2.2-0.7 3-1.6 0.8-1 4.6-4.3 8.5-7.4 3.8-3 11.7-7.9 17.5-10.7 5.8-2.9 13.4-5.9 17-6.9 4-1 8.4-1.4 11.5-1.1 2.7 0.3 7.7 1.5 11 2.6 3.3 1.2 8 3.5 10.5 5.1 2.5 1.5 8.4 6.9 13.2 11.9 8.2 8.5 9 9.7 11.5 17.3 2.5 7.6 2.7 9.9 3.1 28.3 0.3 17.4 0.1 21.2-1.7 29.5-1.2 5.2-2.6 11.2-3.1 13.2-0.8 2.9-2 4.3-5.3 6.2-2.3 1.3-7.6 3.7-11.7 5.2-7.4 2.8-7.7 2.9-27 2.6-15.7-0.2-22.2 0.2-33.5 1.9-7.7 1.2-14.8 2.5-15.8 3-0.9 0.5-1.7 1.8-1.7 2.9 0 1.1 0.8 3.2 1.8 4.7 1.1 1.6 4.3 4.4 7.2 6.3 2.9 1.9 6.5 4.3 7.9 5.2 1.4 0.9 6 2.5 10.1 3.5 6.1 1.5 11.8 1.8 30.5 1.8 18.7 0 24-0.3 28.5-1.7 3.8-1.1 7.4-3.3 11.5-7 3.3-2.9 8.2-6.9 10.8-8.8 2.6-1.9 5.5-5.1 6.4-7 0.9-1.9 2.4-11 3.4-20.5 1.1-9.4 2.6-22.4 3.4-29 0.8-6.6 2.8-20.8 4.5-31.5 1.7-10.7 3.7-21.5 4.4-24 0.8-2.5 1.9-11.5 2.6-20 1.1-14.5 1-15.6-0.7-17.4-1-1-3.6-3-5.8-4.4-2.2-1.4-11-4.9-19.5-7.8-14.9-5-16-5.3-28.5-5.7-7.2-0.3-19.5-0.2-27.5 0.3-8 0.4-18.8 1.5-24 2.4zm0.8 65.2c-2.5 2.1-6.6 5.5-8.9 7.4-2.7 2.2-5.3 5.7-7.1 9.5-1.5 3.3-3.6 9.4-4.7 13.5-1 4.1-2.4 11.3-3.1 16-0.6 4.7-0.8 10.3-0.5 12.5 0.3 2.2 1 4.7 1.5 5.5 0.8 1.3 2.4 1.3 13.7-0.2 8.3-1.2 19.3-1.8 31-1.8h18.3c4.7-8 5-9.7 5-19 0-5.8-0.7-14.6-1.5-19.5-0.9-5-2.3-11.3-3.1-14-0.8-2.8-2.8-7-4.3-9.5-2.2-3.4-4.2-5-8.3-6.8-2.9-1.2-7.1-2.2-9.3-2.2-2.2 0.1-6.3 1.1-9 2.4-2.8 1.2-7.1 4-9.7 6.2zm129.7 3l-6 2.9c-1.8 14.7-2.8 26-3.4 34.5-0.6 8.5-1 15.6-0.8 15.8 0.1 0.1 7.6 0.7 16.7 1.3 9.1 0.5 21 1.9 26.5 2.9 5.5 1.1 10.3 1.6 10.8 1.2 0.4-0.4 1.8-3.7 3.2-7.5 1.8-4.7 2.8-10.5 3.6-19.5 1-11.4 0.9-13.2-0.7-17.2-0.9-2.5-3-6.6-4.6-9.3-2-3.4-4.1-5.4-7.8-7.2-4.4-2.2-6.2-2.5-15.3-2.4-5.6 0.1-11.6 0.4-13.2 0.8-1.7 0.4-5.7 2.1-9 3.7zm-111.6-302.2c3.6 0.4 8.5 2.1 14 4.9 6.2 3.1 9 5.2 11.1 8.2 1.5 2.2 3.9 6.2 5.3 9 1.3 2.7 3.7 8.8 5.1 13.5 1.5 4.7 3.3 9.2 4 10 0.8 0.8 3 6.4 5 12.5 1.9 6 4.3 13.9 5.2 17.5 0.9 3.6 2 7.2 2.5 8 0.5 0.8 2 5.1 3.5 9.5 1.5 4.4 3 8.4 3.4 9 0.4 0.5 1.9 4.6 3.4 9 1.4 4.4 3.5 14.5 4.6 22.5 1.1 8 2.4 17.6 3 21.5 0.6 3.8 0.8 9 0.5 11.5-0.4 2.5-1.2 6.2-1.8 8.4-0.7 2.1-2 4.7-3 5.7-1.3 1.5-3.1 1.9-8.2 1.9-5.7 0-6.8-0.3-9.4-2.8-1.8-1.8-3.2-4.5-4-8-0.6-2.8-1.1-7.3-1.1-10 0-2.6-0.9-9.9-1.9-16.2-1.1-6.3-2.6-15.3-3.3-19.9-1-6.4-1.8-8.7-3.3-9.7-1.1-0.7-4.7-2-8-2.9-3.3-0.8-8.5-1.5-11.5-1.5-3.2 0-6.4 0.6-7.8 1.5-1.5 1-2.4 2.8-2.7 5.7-0.3 2.4-0.9 17.8-2.5 64.3l-2.5 2.2c-1.4 1.3-4.2 2.8-6.3 3.4-3 0.9-4.4 0.8-7.5-0.5-2-0.9-4.6-3.1-5.8-4.9-2-3.1-2-4-1.5-47.7 0.4-30.5 1-47.8 2-55 0.8-5.8 1.9-13.9 2.5-18 0.6-4.1 1.5-17 2-28.5 0.7-17.1 1.2-21.8 2.8-25.5 1-2.5 3-5.6 4.2-6.9 2.1-2.1 2.9-2.2 8-1.7zm9.6 49.1c-1.2 2.8-1.9 8.3-2.4 18.6-0.5 12.2-0.4 14.9 0.9 16.4 0.8 0.9 3.1 2.4 5 3.1 1.9 0.8 4.7 1.4 6.2 1.4 1.6 0 3.7-0.9 4.8-2 1.1-1.1 2-3.2 2-4.8 0-1.5-0.6-5.2-1.4-8.2-0.8-3-2.3-7.1-3.4-9-1.1-1.9-2.8-5.9-3.8-8.8-1.1-2.9-2.9-6.5-4.1-8l-2.2-2.7zm-411.1-45.5c2.3 0 6.4 0.6 9.2 1.4 2.7 0.8 5.9 2.5 7 3.6 1.9 2.1 2 4.1 2.7 41.9 0.4 21.8 1 44.1 2 59.6l3.6-0.8c2.1-0.4 6.9-3.2 11.1-6.5 4-3.1 10.1-8.9 13.5-12.8 3.3-4 8.2-10.7 10.8-15 2.6-4.4 6.2-10.1 8-12.8 1.8-2.7 4.4-5.8 5.8-6.8 1.4-1.1 5-2.2 8.5-2.5 5.7-0.6 6.2-0.5 9.1 2.3 1.7 1.6 3.5 4.5 3.9 6.4 0.6 2.8 0.1 4.9-2.6 11-1.9 4.1-5.8 10.9-8.8 15-2.9 4.1-5.7 8.2-6.1 9-0.5 0.8-5.4 6.7-10.9 13-5.7 6.4-10.1 12.4-10.1 13.5 0 1.1 0.4 3.6 1 5.5 0.5 2 4.9 8.3 10.5 15 5.3 6.3 11.6 14.4 14 18 2.4 3.6 5.5 9 6.9 12 1.4 3 3.3 8.4 4.2 12 0.9 3.8 1.4 8.4 1.1 11-0.3 2.5-1.2 6-2.1 7.7-0.9 1.8-2.6 4-3.9 4.8-1.2 0.8-3.6 1.7-5.2 2-2.1 0.4-4-0.1-6.3-1.5-1.7-1.1-4.8-4.4-6.7-7.3-1.9-2.8-5.5-10.6-8-17.2-2.5-6.6-6.1-14.3-7.9-17-1.9-2.8-5.8-7.7-8.7-11.1-3-3.3-7.2-7.7-9.4-9.7-2.2-2-5.4-3.9-7-4.3-2.4-0.5-3.2-0.2-3.8 1.2-0.5 1.1-1.2 16.3-1.7 33.9-0.7 28.6-1 32.7-2.9 38.7-1.1 3.8-2.8 7-3.6 7.3-0.8 0.3-3 0.5-4.8 0.5-1.7 0-4.8-0.4-6.7-1-1.9-0.5-4.4-1.6-5.5-2.4-2-1.4-2-2.6-2.1-51.3 0-27.4-0.6-59.3-1.2-70.8-0.7-11.6-1.7-26.4-2.2-33-0.6-6.6-1.7-15.8-2.6-20.5-0.8-4.7-1.8-14.8-2.7-36.5l3.2-2.8c2.4-2 4.3-2.7 7.4-2.7zm604.9 0.1c11.8-0.1 21.9 0.3 23.3 0.9 1.4 0.5 3.6 2.9 4.9 5.2 1.6 2.7 3.1 7.9 4.1 13.8 0.8 5.2 2 9.9 2.5 10.5 0.6 0.5 1 3.8 1 7.2 0 4.3-1.2 10.2-3.6 18.5-2 6.8-4.3 14.8-5.1 17.8-0.7 3-2.7 16.1-4.3 29-1.7 12.9-3.2 24.6-3.5 26-0.2 1.4-1 8.1-1.6 15-0.6 6.9-1.7 15.8-2.5 19.7-0.8 4-2 8.5-2.8 10-0.7 1.6-2.1 5.3-3.1 8.3-1 3-2.1 5.7-2.4 6-0.3 0.3-1.3 1.6-2 3-0.8 1.4-2 3.6-2.7 5-0.7 1.4-2.6 3.7-4.3 5.2-1.7 1.6-4.8 3.1-6.9 3.4-2 0.4-7.3 0.5-11.7 0.2-6.4-0.4-9.2-1.1-14.3-3.6-3.4-1.8-8.3-5.1-10.8-7.5-2.6-2.3-5.5-6-6.6-8.2-1.2-2.2-2.7-6.9-3.4-10.5-0.8-3.6-1.4-10.1-1.4-14.5 0-4.4 0.5-9.8 1-12 0.5-2.3 2-5 3.7-6.4 2.5-2.1 3.4-2.3 8.8-1.8q6 0.6 9.7 3.2c2.1 1.4 4.3 3.5 4.9 4.7 0.9 1.9 0.6 4-2 11.5-2.3 6.9-2.9 10.1-2.4 12.4 0.5 1.7 1.4 3.6 2.2 4.3 0.8 0.6 4.4 1.3 8 1.5 3.8 0.2 7.6-0.1 8.8-0.8 1.3-0.6 2.9-2.3 3.7-3.9 0.8-1.5 2.1-5.4 3-8.7 0.9-3.3 2.5-14.8 3.6-25.5 1.2-10.7 2.9-24.5 3.9-30.5 1-6.1 1.7-11.1 1.7-11.3-0.1-0.2-2.6 0.4-5.6 1.4-3 0.9-8 1.6-11 1.6-3 0-7.5-0.5-10-1.2-2.5-0.7-5.9-1.9-7.5-2.7-1.7-0.9-5-3.2-7.5-5.3-2.5-2-5.6-5.9-7-8.6-2.3-4.6-2.5-5.8-2.4-18.9 0.1-7.7 0.8-19.4 1.7-26 0.9-6.6 2.5-14.5 3.5-17.5 1.5-4.3 2.8-6.2 6.3-8.8 2.4-1.8 6.2-4.7 8.4-6.4 2.2-1.8 5.1-3.5 6.5-3.9 1.4-0.4 11.8-0.8 23.2-0.8zm-16.7 26.5c-1.2 1.7-3.3 8-5 14.9-2.5 10.4-2.7 12.6-1.8 17 0.6 2.7 1.9 6.8 3 9l1.8 4c10.3-0.1 14.5-0.8 16.5-1.8 2.3-1.1 4.1-2.9 5.2-5.4 0.9-2.1 2.2-5.6 2.8-7.8 0.6-2.2 1.4-10.3 1.7-18l0.6-14c-7.6-2.7-11.2-3.5-12.8-3.5-1.7 0.1-4.5 0.7-6.4 1.4-1.9 0.7-4.4 2.6-5.6 4.2zm-380-17.6c0.5 0 3.1 1.5 5.7 3.5 3.3 2.4 5.5 5.1 7.2 8.7 1.3 2.9 2.9 7.2 4.6 13.8l6.2-5c3.5-2.8 8.1-5.9 10.3-7 2.2-1.1 8.7-3 14.5-4.2 9.3-1.9 11.5-2 19.5-1 6.3 0.7 9.5 1.6 10.8 2.9 1 1 2 3.6 2.3 5.8 0.4 2.2 0.3 6.2-0.1 9-0.5 3.5-1.6 5.7-3.4 7.4-2.5 2.3-3.1 2.4-10.4 1.8-7.3-0.7-8-0.5-13.5 2.3-3.1 1.7-8.7 5.6-12.4 8.8-3.7 3.1-8.1 7.5-9.8 9.7-1.7 2.2-3.9 6.5-4.7 9.5-1.3 4.4-1.6 9.7-1.5 26.2 0.1 12 0.8 24.9 1.6 30.5 0.8 5.4 2 14.5 2.6 20.3 0.6 5.8 1.2 14.3 1.2 19 0.1 6.7-0.4 9.4-2 12.5-1.1 2.2-3 4.9-4.2 6-1.6 1.4-4 2.1-8.4 2.4-3.4 0.2-7.1-0.1-8.4-0.8-1.2-0.6-3.9-3.9-9.7-13.6l-0.6-53c-0.5-50.6-0.7-53.8-3.2-70.5-1.4-9.6-3.3-20-4.2-23-0.8-3-2.1-7.9-2.8-10.8-1-4.4-1-5.4 0.3-6.8 0.8-0.8 3.7-2.1 6.5-2.9 2.7-0.7 5.4-1.4 6-1.5zm8.5 259.4c5.2 0.3 16.2 1.5 24.5 2.8 12.8 2 16.7 3.1 26.5 7.3 10.8 4.7 12 5.5 20.6 14 5.5 5.4 10.1 11 11.6 14 1.4 2.7 3.2 7.9 4.1 11.5 0.8 3.6 2.1 11.2 2.7 17 0.7 5.8 0.9 14.1 0.5 18.5-0.3 4.4-1.7 13.4-3.1 20-1.3 6.6-4 17.5-5.9 24.2-1.9 6.8-4.2 13.6-6.5 18.3l-33.3-0.7c-22.5-0.4-36.1-0.3-42.2 0.5-5 0.6-13.5 1.7-19 2.3-9.8 1.2-10.1 1.1-13.9-1.2-2.2-1.3-4.6-3.3-5.3-4.4-0.9-1.3-1.7-8.3-2.4-20.5-0.6-10.2-0.9-31.3-0.6-47 0.5-22.7 1-30.3 2.5-37.5 1-5 3.1-11.7 4.6-15 1.5-3.3 4.4-8.2 6.4-10.9 2-2.7 5.5-6.3 7.7-8 2.2-1.7 5.6-3.6 7.5-4.3 2.3-0.9 6.7-1.2 13-0.9zm-6.8 30.5c-2.3 1.1-5.1 3.6-6.2 5.3-1.1 1.8-2.6 6.4-3.5 10.3-0.8 3.8-2 11.3-2.7 16.5-0.7 5.4-1.3 20.3-1.3 34.7 0 15.5 0.4 25.6 1 26.2 0.6 0.6 2.9 0.6 6 0.1 2.7-0.5 7.7-1.4 11-2 3.3-0.5 19-1 35-1h29c2.8-16.7 4-25.6 4.5-30.5 0.5-5 1-12.3 1-16.3 0-3.9-0.7-10.7-1.6-15-0.9-4.2-2.5-9.4-3.5-11.5-1.1-2-4-5.3-6.7-7.3-2.6-1.9-7.4-4.8-10.7-6.4-3.3-1.6-8.5-3.5-11.5-4.3-3-0.8-10.2-1.7-16-2-5.8-0.3-12.5-0.2-15 0.2-2.5 0.5-6.4 1.8-8.8 3zm-255.2-3.2c4.7 0.2 12.5 1.1 17.5 1.9 4.9 0.9 12.4 2.4 16.5 3.4 4.1 1.1 14.2 4.2 22.5 7.1 8.6 2.9 16.3 6.2 18 7.6 1.6 1.4 5 3.6 7.5 4.8 2.5 1.2 5.7 3.6 7.2 5.4 2.1 2.3 2.8 4.2 2.8 7.3 0 3.6-0.9 5.6-5.9 12.8-3.3 4.7-8.6 12.3-11.8 17-3.1 4.7-7.8 12.5-10.5 17.5-2.6 4.9-6.1 12.6-7.9 17-1.8 4.4-5.4 16.9-8.1 27.7-2.6 10.9-5.4 21.3-6.1 23-0.8 1.8-2.8 5-4.5 7-2.3 2.7-4 3.8-6 3.8-1.5 0-5.9-1.5-9.7-3.5-3.9-1.9-10-5.8-13.7-8.7-3.7-2.9-11.1-8.1-16.5-11.6-6.5-4.1-13.8-10.2-21.8-18-6.6-6.4-13.4-13.5-15.2-15.7-1.7-2.2-5.5-9.4-8.3-16-2.9-6.6-5.9-14.9-6.6-18.5-0.8-3.6-1.4-8.5-1.4-11 0-2.5 0.9-8.1 1.9-12.5 1.1-4.4 3.3-11.8 5.1-16.5 1.7-4.7 4.8-10.7 6.8-13.4 2-2.8 6.3-7.1 9.4-9.8 3.4-2.8 7.6-5.3 10-5.9 2.4-0.6 7.9-1.5 12.3-1.9 4.4-0.4 11.8-0.6 16.5-0.3zm-25.3 26.6c-1.5 0.9-3.8 3.4-5 5.4-1.3 2.1-3.4 6.7-4.6 10.3-1.2 3.6-2.4 9.2-2.7 12.5-0.4 3.7 0 9.7 1.1 15.5 0.9 5.2 2.6 12.6 3.8 16.5 2 6.2 3.3 8.1 11.7 17.3 8.9 9.7 10.2 10.7 20.5 15.8 6 3.1 11.9 6.4 13 7.5 1.1 1 2.6 1.9 3.2 1.9 0.7 0 2.2-2.6 3.4-5.8 1.1-3.1 3.8-12.1 6-20 2.3-8.5 5.9-18.3 8.9-24.5 2.7-5.6 8.3-14.7 12.4-20.2 4.2-5.5 8-11.5 8.6-13.3 0.9-2.9 0.6-3.7-2.8-8.7-2-3-5.1-6.1-6.7-6.9-1.7-0.8-6.8-2.5-11.5-3.7-7.1-1.8-12-2.2-29.5-2.5-11.6-0.2-22.4 0-24 0.4-1.7 0.4-4.2 1.5-5.8 2.5z"
          />
        </g>
        {introAnimate && (
          <animateTransform
            attributeName="transform"
            type="translate"
            from="0,0"
            to="0,-1000"
            dur="3s"
            fill="freeze"
            begin="0.5s"
          />
        )}
      </svg>
    </div>
  );
};
