const backendURL = "https://bootcamp2025.depster.me";

const logIn = async (email, password) => {
  try {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    const response = await fetch(`${backendURL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();
    const { token } = data.data;

    localStorage.setItem("token", token);

    if (!response.ok) {
      throw new Error(data.message || "Log in failed");
    }

    return token;
  } catch (error) {
    alert("Error occured during login");
    console.error("Error type:", error);
  }
};

const getColors = async (numberOfColorsToGenerate) => {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("No token found in local storage");
    }

    const response = await fetch(
      `${backendURL}/api/colors?limit=${numberOfColorsToGenerate}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(response.status || "Colors fetch failed");
    }

    const dataResponse = await response.json();
    const { data } = dataResponse;

    return data;
  } catch (error) {
    console.error("Error fetching colors:", error);
    return null;
  }
};

export { logIn, getColors };
