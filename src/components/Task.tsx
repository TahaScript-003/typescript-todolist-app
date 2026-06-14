import { Card, Avatar, Badge, Button, AlertDialog, Flex, Dialog, Select, TextField, TextArea } from '@radix-ui/themes'
import { Pencil2Icon, TrashIcon } from '@radix-ui/react-icons'
import { TaskType } from '../App'
import { ChangeEvent, Dispatch, SetStateAction } from 'react'

// Define a type for the props that the Task component will receive
type TaskProps = {
    task: TaskType
    onDelete: () => void
    onEdit: () => void
    setNewTaskTitle: Dispatch<SetStateAction<string>>
    setNewTaskDescription: Dispatch<SetStateAction<string>>
    setNewTaskPriority: Dispatch<SetStateAction<'high' | 'medium' | 'low' | string>>
}

const Task = ({
    task,
    onDelete,
    onEdit,
    setNewTaskTitle,
    setNewTaskDescription,
    setNewTaskPriority }: TaskProps) => {


    return (
        <div className="task">
            <Card>
                <div className="flex justify-center items-center gap-4">
                    <Avatar
                        size="4"
                        src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                        radius="full"
                        fallback="T"
                    />
                    <div className="">
                        <h2 className="font-bold">{task.title}</h2>
                        <p>{task.description}</p>
                        <Badge
                            className="mt-2"
                            color={task.priority === 'high' ? 'red' : task.priority === 'medium' ? 'orange' : 'green'}>
                            {task.priority}
                        </Badge>
                    </div>
                    <div className="actions flex gap-2">
                        {/* Edit Task */}
                        <div className="edit-task">
                            <Dialog.Root>
                                <Dialog.Trigger>
                                    <Button
                                        className="edit-task-btn"
                                        variant="soft"
                                        color="purple">
                                        <Pencil2Icon />
                                    </Button>
                                </Dialog.Trigger>

                                <Dialog.Content maxWidth="450px">
                                    <Dialog.Title color="purple">Add new task</Dialog.Title>

                                    <div className="flex flex-col gap-3">
                                        <label>
                                            <p className="font-bold">Title</p>
                                            <TextField.Root
                                                defaultValue={task.title}
                                                placeholder="Title"
                                                onChange={(e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => setNewTaskTitle(e.target.value)}
                                            />
                                        </label>
                                        <label>
                                            <p className="font-bold">Descripton</p>
                                            <TextArea
                                                defaultValue={task.description}
                                                placeholder="Decription"
                                                onChange={(e: ChangeEvent<HTMLTextAreaElement, HTMLTextAreaElement>) => setNewTaskDescription(e.target.value)}
                                            />
                                        </label>
                                        <label>
                                            <p className="font-bold">Priority</p>
                                            <Select.Root size="2" defaultValue={task.priority} onValueChange={(e: string) => setNewTaskPriority(e)}>
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
                                                onClick={onEdit}>Save</Button>
                                        </Dialog.Close>
                                    </div>
                                </Dialog.Content>
                            </Dialog.Root>

                        </div>

                        {/* Delete Task */}
                        <div className="delete-task">
                            <AlertDialog.Root>
                                <AlertDialog.Trigger>
                                    <Button
                                        className="delete-task-btn"
                                        variant="soft"
                                        color="red">
                                        <TrashIcon />
                                    </Button>
                                </AlertDialog.Trigger>
                                <AlertDialog.Content maxWidth="450px">
                                    <AlertDialog.Title>Delete Task</AlertDialog.Title>
                                    <AlertDialog.Description size="2">
                                        Are you sure?
                                    </AlertDialog.Description>

                                    <Flex gap="3" mt="4" justify="end">
                                        <AlertDialog.Cancel>
                                            <Button variant="soft" color="gray">
                                                Cancel
                                            </Button>
                                        </AlertDialog.Cancel>
                                        <AlertDialog.Action>
                                            <Button
                                                variant="solid"
                                                color="red"
                                                onClick={onDelete}>
                                                Delete
                                            </Button>
                                        </AlertDialog.Action>
                                    </Flex>
                                </AlertDialog.Content>
                            </AlertDialog.Root>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default Task;
