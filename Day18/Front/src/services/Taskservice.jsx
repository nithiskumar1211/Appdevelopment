import { projectApi, taskApi } from "../api/axios";

class Taskservice {
  addProject(project) {
    return projectApi.post("/postproject",project);
  }
  getTasks() {
    return taskApi.get("/gettask",);
  }
  addTask(task,pid) {
    return taskApi.post("/posttask/"+pid,task);
  }
  deleteTask(tid){
    return taskApi.delete("/deletetask/"+tid);
  }
}
export default new Taskservice();
