import './Footer.scss';

export default function Footer({ company }) {
  //   console.log(company);
  return (
    <div className="footer">
      <p>{company} &#169; 2022 All rights reserved </p>
    </div>
  );
}
