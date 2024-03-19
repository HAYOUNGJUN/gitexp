type BoxProps = {
  title: string;
  imgPath: string;
  result: string;
};

export default function Box({ title, imgPath, result }: BoxProps) {
  return (
    <div className={`box ${result}`}>
      <h1>{title}</h1>
      <img src={imgPath} />
      <h2>{result && result.toUpperCase()}</h2>
    </div>
  );
}
