<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\repositories\TaskRepository;

class TasksController extends Controller
{
    public $taskRepository;

    public function __construct(TaskRepository $taskRepository) {
        $this->taskRepository = $taskRepository;
    }

    /**
     * index() Get all Tasks
     *
     * @return response
     */
    public function index()
    {
        $tasks = $this->taskRepository->getAll();
        return response()->json([
            "success" => true,
            "message" => "Task List",
            "date" => $tasks
        ]);
    }

    /**
     * show() Find task by id
     *
     * @param integer $id
     * @return response
     */
    public function show($id)
    {
        $task = $this->taskRepository->findById($id);
        if(is_null($task)){
            return response()->json([
                "success" => false,
                "message" => "Task Detail",
                "date" => null
            ]);
        }else{
            return response()->json([
                "success" => true,
                "message" => "Task Detail",
                "date" => $task
            ]);
        }
    }

    /**
     * store() create new task
     *
     * @param Request $request
     * @return response
     */
    public function store(Request $request)
    {
        $formData = $request->all();
        $validator = \Validator::make($formData, [
            'name' => 'required',
            'description' => 'required',
            'project_id' => 'required',
        ],[
            'name.required' => "Please give task name",
            'description.required' => "Please give task description",
            'project_id.required' => "Please give task project id",
        ]);

        if ($validator->fails()) {
            return response()->json([
                "success" => false,
                "message" => "Something went wrong.",
                "errors" => $validator->getMessageBag(),
            ]);
        }

        $task = $this->taskRepository->create($request);
        return response()->json([
            "success" => true,
            "message" => "Task Created",
            "date" => $task
        ]);
        
    }

    /**
     * update() update task by id
     *
     * @param Request $request
     * @param interger $id
     * @return response
     */
    public function update(Request $request, $id)
    {
        $task = $this->taskRepository->findById($id);
        if(is_null($task)){
            return response()->json([
                "success" => false,
                "message" => "Task Not Found",
                "date" => null
            ]);
        }

        $formData = $request->all();
        $validator = \Validator::make($formData, [
            'name' => 'required',
            'description' => 'required',
            'project_id' => 'required',
        ],[
            'name.required' => "Please give task name",
            'description.required' => "Please give task description",
            'project_id.required' => "Please give task project id",
        ]);

        if ($validator->fails()) {
            return response()->json([
                "success" => false,
                "message" => "Something went wrong.",
                "errors" => $validator->getMessageBag(),
            ]);
        }

        $task = $this->taskRepository->edit($request, $id);
        return response()->json([
            "success" => true,
            "message" => "Task Updated",
            "date" => $task
        ]);
        
    }

    /**
     * destroy() delete a task
     *
     * @param integer $id
     * @return response
     */
    public function destroy($id)
    {
        $task = $this->taskRepository->findById($id);
        if(is_null($task)){
            return response()->json([
                "success" => false,
                "message" => "Task Not Found",
                "date" => null
            ]);
        }

        $task = $this->taskRepository->delete($id);
        return response()->json([
            "success" => true,
            "message" => "Task Deleted",
            "date" => $task
        ]);
        
    }
}
