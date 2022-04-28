import http from "../http-common";


class TypeDataService {
  getAllType() {
    return http.get("/type");
  }
}

export default new TypeDataService();