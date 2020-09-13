<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\repositories\ProjectRepository;

class ProjectsController extends Controller
{
    public $projectRepository;

    public function __construct(ProjectRepository $projectRepository) {
        $this->projectRepository = $projectRepository;
    }

    /**
     * index() Get all projects
     *
     * @return response
     */
    public function index()
    {
        $projects = $this->projectRepository->getAll();
        return response()->json([
            "success" => true,
            "message" => "Project List",
            "date" => $projects
        ]);
    }

    /**
     * show() Find project by id
     *
     * @param integer $id
     * @return response
     */
    public function show($id)
    {
        $project = $this->projectRepository->findById($id);
        if(is_null($project)){
            return response()->json([
                "success" => false,
                "message" => "Project Detail",
                "date" => null
            ]);
        }else{
            return response()->json([
                "success" => true,
                "message" => "Project Detail",
                "date" => $project
            ]);
        }
    }

    /**
     * store() create new project
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
            'user_id' => 'required',
        ],[
            'name.required' => "Please give project name",
            'description.required' => "Please give project description",
        ]);

        if ($validator->fails()) {
            return response()->json([
                "success" => false,
                "message" => "Something went wrong.",
                "errors" => $validator->getMessageBag(),
            ]);
        }

        $project = $this->projectRepository->create($request);
        return response()->json([
            "success" => true,
            "message" => "Project Created",
            "date" => $project
        ]);
        
    }

    /**
     * update() update project by id
     *
     * @param Request $request
     * @param interger $id
     * @return response
     */
    public function update(Request $request, $id)
    {
        $project = $this->projectRepository->findById($id);
        if(is_null($project)){
            return response()->json([
                "success" => false,
                "message" => "Project Not Found",
                "date" => null
            ]);
        }

        $formData = $request->all();
        $validator = \Validator::make($formData, [
            'name' => 'required',
            'description' => 'required',
            'user_id' => 'required',
        ],[
            'name.required' => "Please give project name",
            'description.required' => "Please give project description",
        ]);

        if ($validator->fails()) {
            return response()->json([
                "success" => false,
                "message" => "Something went wrong.",
                "errors" => $validator->getMessageBag(),
            ]);
        }

        $project = $this->projectRepository->edit($request, $id);
        return response()->json([
            "success" => true,
            "message" => "Project Updated",
            "date" => $project
        ]);
        
    }

    /**
     * destroy() delete a project
     *
     * @param integer $id
     * @return response
     */
    public function destroy($id)
    {
        $project = $this->projectRepository->findById($id);
        if(is_null($project)){
            return response()->json([
                "success" => false,
                "message" => "Project Not Found",
                "date" => null
            ]);
        }

        $project = $this->projectRepository->delete($id);
        return response()->json([
            "success" => true,
            "message" => "Project Deleted",
            "date" => $project
        ]);
        
    }
}
