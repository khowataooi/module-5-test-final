function DeleteModal({ setDeleteId, remove }) {
  return (
    <>
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "#535353bd",
          zIndex: 99999,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            background: "white",
            width: "30rem",
            height: "",
            borderRadius: "1rem",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "7rem",
              textAlign: "center",
              borderBottom: "1px solid black",
            }}
          >
            <h2>Bạn có chắc muốn xoá sản phẩm này?</h2>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              margin: "16px",
            }}
          >
            <button onClick={() => setDeleteId(null)}>Cancel</button> &nbsp;
            <button onClick={() => remove()}>OK</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeleteModal;
