import ReactMarkdown from "react-markdown";

export const PriceDetails = () => {
  return (
    <ReactMarkdown>
      # Kragsentrale Pricing and Membership Information ## Access Hours -
      **Members with Paid Valid Passes**: 24/7/365.2422 access. - **Day
      Customers**: - Open **Tuesday - Thursday** from **16:00 - 21:00**. -
      Outside these hours, access is not guaranteed. You may try your luck and
      hope that someone lets you in. - **Honesty System**: If you're a day
      customer, please pay via the honesty system. CCTV is in use to monitor
      payments, so please ensure you pay for your session. --- ## Pricing ###
      Day Pass - **Available to non-members** - **Valid Only for Day Customers**
      (One-time session) | Demographic | Price (R) |
      |-----------------|-----------| | 0 - 18 years | x | | 19+ years | x | |
      University Student | x | --- ### Membership Info Members are given **NFC
      tags** to scan in. Membership can be acquired when the gym is open to day
      customers. This is the preferred way to climb at Kragsentrale. ####
      Session Passes When purchasing a **Session Pass**, you buy a number of
      tokens which represent single climbing sessions. The specifics of how this
      works can be seen in the [Membership Info
      Section](https://github.com/jacpa42/krag_server/tree/main/frontend#membership-info).
      | Demographic | 1-Day Session Pass (R) | 10-Day Session Pass (R) | 30-Day
      Session Pass (R) |
      |-----------------|------------------------|-------------------------|-------------------------|
      | 0 - 18 years | x | x | x | | 19+ years | x | x | x | | University
      Student | x | x | x | #### Time Passes When purchasing a **Time Pass**,
      you select a date in the future for when the pass will expire. This is the
      typical **month pass** or **year pass** you see at other gyms. |
      Demographic | 7-Day Time Pass (R) | 30-Day Time Pass (R) | 90-Day Time
      Pass (R) | 365-Day Time Pass (R) |
      |-----------------|---------------------|----------------------|----------------------|-----------------------|
      | 0 - 18 years | x | x | x | x | | 19+ years | x | x | x | x | |
      University Student | x | x | x | x | --- ## Summary - **Session Passes**:
      Available for specific time periods, typically purchased for single or
      multiple sessions. - **Time Passes**: Longer-term passes, with expiration
      dates ranging from 7 days to 1 year. - **Day Customers**: Limited access
      and a single session pass option. - **Membership**: Preferred for
      continuous access with NFC tag entry.
    </ReactMarkdown>
  );
};
