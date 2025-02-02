import { motion } from "motion/react";

const Socials = () => {
  return (
    <motion.div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <svg
        width={240}
        height={40}
        viewBox="0 0 149 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          exit={{ opacity: 0, scale: 0 }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <path
            d="M16.8517 11.9914L16.6351 13.7306C16.5985 14.0211 16.3525 14.2396 16.0606 14.2396H13.2437V21.5113C12.9467 21.5381 12.6457 21.5518 12.3414 21.5518C11.6609 21.5518 10.9967 21.4838 10.3548 21.3542V14.2396H8.18834C7.98942 14.2396 7.82715 14.0767 7.82715 13.8771V11.7008C7.82715 11.5013 7.98942 11.3383 8.18834 11.3383H10.3548V8.07451C10.3548 6.07159 11.9717 4.44818 13.9668 4.44818H16.4945C16.6934 4.44818 16.8557 4.61111 16.8557 4.81068V6.987C16.8557 7.18657 16.6934 7.3495 16.4945 7.3495H14.6885C13.8909 7.3495 13.2444 7.9986 13.2444 8.80016V11.339H16.2779C16.626 11.339 16.8949 11.6452 16.8524 11.992L16.8517 11.9914Z"
            fill="black"
          />
        </motion.a>

        <motion.a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          exit={{ opacity: 0, scale: 0 }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            delay: 0.1,
          }}
        >
          <path
            d="M57.5273 6.18085H50.4729C48.6551 6.18085 47.1809 7.65506 47.1809 9.47281V16.5272C47.1809 18.3449 48.6551 19.8192 50.4729 19.8192H57.5273C59.345 19.8192 60.8192 18.3449 60.8192 16.5272V9.47281C60.8192 7.65506 59.345 6.18085 57.5273 6.18085ZM59.6434 16.2923C59.6434 17.5905 58.5899 18.644 57.2917 18.644H50.7078C49.4096 18.644 48.3561 17.5905 48.3561 16.2923V9.70837C48.3561 8.41017 49.4096 7.35669 50.7078 7.35669H57.2917C58.5899 7.35669 59.6434 8.41017 59.6434 9.70837V16.2923Z"
            fill="black"
          />
          <path
            d="M54.0068 9.47278C52.0602 9.47278 50.48 11.053 50.48 12.9996C50.48 14.9463 52.0602 16.5265 54.0068 16.5265C55.9535 16.5265 57.5337 14.9463 57.5337 12.9996C57.5337 11.053 55.9535 9.47278 54.0068 9.47278ZM54.0068 15.3513C52.7113 15.3513 51.6552 14.2952 51.6552 12.9996C51.6552 11.7041 52.7113 10.648 54.0068 10.648C55.3024 10.648 56.3585 11.7041 56.3585 12.9996C56.3585 14.2952 55.3024 15.3513 54.0068 15.3513Z"
            fill="black"
          />
          <path
            d="M57.7693 9.94328C57.3807 9.94328 57.064 9.62658 57.064 9.2379C57.064 8.84923 57.3807 8.53253 57.7693 8.53253C58.158 8.53253 58.4747 8.84923 58.4747 9.2379C58.4747 9.62658 58.158 9.94328 57.7693 9.94328Z"
            fill="black"
          />
        </motion.a>

        <motion.a
          href="https://www.tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
          exit={{ opacity: 0, scale: 0 }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            delay: 0.3,
          }}
        >
          <path
            d="M97.5765 16.3499V9.9086C97.5765 9.9086 98.3028 11.1191 100.928 11.1931C101.068 11.197 101.184 11.0818 101.184 10.9418V9.12144C101.184 8.98599 101.076 8.87868 100.94 8.87083C98.9041 8.75567 97.937 7.19377 97.8421 5.76143C97.8336 5.6286 97.7171 5.52783 97.5843 5.52783H95.5081C95.37 5.52783 95.2575 5.63972 95.2575 5.77844V16.0181C95.2575 17.1305 94.4075 18.0983 93.2965 18.1506C92.0264 18.2108 90.9939 17.1207 91.1509 15.8323C91.2621 14.9221 91.9924 14.1768 92.9006 14.0505C93.0812 14.0257 93.2572 14.0237 93.428 14.0427C93.5791 14.0597 93.712 13.9472 93.712 13.7954V11.9704C93.712 11.8409 93.6132 11.7283 93.4836 11.7205C93.2232 11.7034 92.9562 11.7093 92.6853 11.7401C90.6824 11.9671 89.0662 13.5879 88.8444 15.5915C88.5519 18.2344 90.613 20.4715 93.197 20.4715C95.6161 20.4715 97.5771 18.5105 97.5771 16.0914"
            fill="black"
          />
        </motion.a>

        <motion.a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          exit={{ opacity: 0, scale: 0 }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          <path
            d="M141.603 7.49146H130.398C129.291 7.49146 128.393 8.3892 128.393 9.49568V16.5036C128.393 17.6107 129.291 18.5078 130.398 18.5078H141.603C142.709 18.5078 143.607 17.6107 143.607 16.5036V9.49568C143.607 8.3892 142.709 7.49146 141.603 7.49146ZM137.8 13.4839L134.684 15.0412C134.324 15.2211 133.901 14.96 133.901 14.5583V11.4436C133.901 11.0419 134.325 10.7808 134.684 10.9601L137.8 12.5174C138.198 12.7163 138.198 13.2849 137.8 13.4839Z"
            fill="black"
          />
        </motion.a>
      </svg>
    </motion.div>
  );
};

export default Socials;
