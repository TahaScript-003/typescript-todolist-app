import { PlusIcon } from "@radix-ui/react-icons";
import { Badge, Box, Button, Dialog, Select, TextArea, TextField, Theme } from "@radix-ui/themes";
import { useState } from "react";
import Task from "./components/Task";

// Define a type for the task object
export type TaskType = {
  title: string
  description: string
  priority: 'high' | 'medium' | 'low' | string
}


function App() {
  const [newTaskTitle, setNewTaskTitle] = useState<string>(''); // Initial value of the new task title is an empty string
  const [newTaskDescription, setNewTaskDescription] = useState<string>(''); // Initial value of the new task description is an empty string
  const [newTaskPriority, setNewTaskPriority] = useState<'high' | 'medium' | 'low' | string>('high'); // Initial value of the new task priority is 'high'

  const [taskslist, setTasklists] = useState<TaskType[]>([]) // Initial value of the tasks list is an empty array of type Task

  // Function to handle adding a new task to the tasks list
  const addTask = () => {
    // Create a new task object with the current values of the new task title, description, and priority
    const newTask: TaskType = {
      title: newTaskTitle,
      description: newTaskDescription,
      priority: newTaskPriority
    }
    setTasklists([...taskslist, newTask]) // Update the tasks list by adding the new task to the existing list

    setNewTaskTitle(''); // Reset the new task title to an empty string after adding the task
    setNewTaskDescription(''); // Reset the new task description to an empty string after adding the task
    setNewTaskPriority('high'); // Reset the new task priority to 'high' after adding the task
  }

  // Function to handle deleting a task from the tasks list based on its title
  const deleteTask = (title: string) => {
    const updatedTasks: TaskType[] = taskslist.filter(task => task.title !== title); // Create a new array of tasks that excludes the task with the specified title
    setTasklists(updatedTasks); // Update the tasks list with the new array of tasks after deletion
  }

  // Function to handle editing a task in the tasks list based on its title
  const editTask = (title: string) => {
    // Create a new array of tasks by mapping through the existing tasks list and updating the task with the specified title
    const updatedTasks: TaskType[] = taskslist.map(task => {
      // If the task title matches the specified title, return a new task object with the updated title, description, and priority
      if (task.title === title) {
        return {
          title: newTaskTitle,
          description: newTaskDescription,
          priority: newTaskPriority
        }
      }
      // If the task title does not match, return the task as is
      return task
    })
    setTasklists(updatedTasks);
  }

  return (
    <Theme>
      <div className="app min-h-screen bg-purple-100">
        <div className="container-fluid flex flex-col justify-center items-center p-5">
          <h1 className="text-5xl font-bold my-5">Just Do It</h1>
          <div className="add-task py-5">
            {/* Add Task Dialog */}
            <Dialog.Root>
              <Dialog.Trigger>
                <Button
                  className="add-task-btn"
                  color="purple"
                  variant="soft"
                  size="4">
                  Add Task
                  <PlusIcon />
                </Button>
              </Dialog.Trigger>

              <Dialog.Content maxWidth="450px">
                <Dialog.Title color="purple">Add new task</Dialog.Title>

                <div className="flex flex-col gap-3">
                  <label>
                    <p className="font-bold">Title</p>
                    <TextField.Root
                      placeholder="Title"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTaskTitle(e.target.value)}
                    />
                  </label>
                  <label>
                    <p className="font-bold">Descripton</p>
                    <TextArea
                      placeholder="Decription"
                      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setNewTaskDescription(e.target.value)}
                    />
                  </label>
                  <label>
                    <p className="font-bold">Priority</p>
                    <Select.Root size="2" defaultValue="high" onValueChange={(e: string) => setNewTaskPriority(e)}>
                      <Select.Trigger />
                      <Select.Content>
                        <Select.Item value="high">
                          <Badge color="red">High</Badge>
                        </Select.Item>
                        <Select.Item value="medium">
                          <Badge color="orange">Medium</Badge>
                        </Select.Item>
                        <Select.Item value="low">
                          <Badge color="green">Low</Badge>
                        </Select.Item>
                      </Select.Content>
                    </Select.Root>
                  </label>
                </div>

                <div className="flex justify-end gap-3 mt-5">
                  <Dialog.Close>
                    <Button variant="soft" color="gray">
                      Cancel
                    </Button>
                  </Dialog.Close>
                  <Dialog.Close>
                    <Button
                      color="purple"
                      variant="solid"
                      onClick={() => addTask()}>Save</Button>
                  </Dialog.Close>
                </div>
              </Dialog.Content>
            </Dialog.Root>
          </div>

          {/* Task List */}
          <div className="task-list">
            {
              taskslist?.map(task => (
                <Box minWidth="300px">
                  <Task
                    task={task}
                    onDelete={() => deleteTask(task.title)}
                    onEdit={() => editTask(task.title)}
                    setNewTaskTitle={setNewTaskTitle}
                    setNewTaskDescription={setNewTaskDescription}
                    setNewTaskPriority={setNewTaskPriority}
                  />
                </Box>
              ))
            }
          </div>

        </div>
      </div>
    </Theme>
  )
}

export default App;
