import Image from 'next/image';

const Spinner = () => {
  return (
    <Image
      src="./images/spinner.svg"
      alt="spinner"
      width={56}
      height={56}
      className="object-contain invert"
    />
  );
};

export default Spinner;
