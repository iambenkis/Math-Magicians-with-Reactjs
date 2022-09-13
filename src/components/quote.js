const Quote = () => (
  <div className="quote">
    <p style={{
      textAlign: 'center',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
    }}
    >
      Mathematics is not about numbers,
      equations, computations, or algorithms :
      It is about undarstanding.
      <span style={{
        fontWeight: '700',
      }}
      >
        - William Paul Thurston.
      </span>
    </p>
  </div>
);

export default Quote;
