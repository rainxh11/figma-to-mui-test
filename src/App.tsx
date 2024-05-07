import {Box, Grid, Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@mui/material";
import {CheckCircleOutline, ChevronLeft, ChevronRight, ErrorOutline, PeopleOutline} from "@mui/icons-material";
import {ReactNode} from "react";

interface FileItem {
    file: string;
    owner: string;
    permissions: string;
    risk: { icon: ReactNode, label: string }
}

const items: FileItem[] = [
    {
        file: "Taxes 2024.pdf",
        owner: "Ilyes K",
        permissions: "Shared with 5 people",
        risk: {
            icon: <ErrorOutline color={"error"}/>,
            label: "Public access"
        }
    },
    {
        file: "2024 Finances Sheet",
        owner: "Ilyes K",
        permissions: "Shared with 2 people",
        risk: {
            icon: <ErrorOutline color={"warning"}/>,
            label: "Not accessed in last 30d"
        }
    },
    {
        file: "2024 Oran Trip Plan",
        owner: "Ilyes K",
        permissions: "Not Shared",
        risk: {
            icon: <CheckCircleOutline color={"success"}/>,
            label: "Secure"
        }
    }
]


function App() {
    return (
        <Grid columns={24} container sx={{
            padding: 0
        }} height={"100vh"}>
            <Grid item md={4} sx={{
                background: '#F5F6F8',
                borderRight: "1px solid",
                borderColor: "#BDBDBD",
                padding: "32px 16px 32px 16px"
            }}>
                <Stack flex={1} flexDirection={"column"} gap={2}>
                    <Typography variant={"h1"} sx={{
                        fontWeight: '400',
                        fontSize: '30px',
                        marginBottom: '50px'
                    }}>
                        Drive Security
                    </Typography>
                    <Typography fontSize={20} fontWeight={700}>
                        Google Drive
                    </Typography>
                    <Typography fontSize={20}>
                        One Drive
                    </Typography>
                    <Typography fontSize={20}>
                        Dropbox
                    </Typography>
                    <Typography fontSize={20}>
                        Box
                    </Typography>
                </Stack>
            </Grid>
            <Grid item md={20} height={"100%"}>
                    <Stack flex={1} flexDirection={"row"} justifyContent={"space-between"} sx={{
                        borderBottom: "1px solid", borderColor: "#BDBDBD",
                        background: '#F5F6F8',
                        padding: "32px 16px 32px 16px"
                    }}>
                        <Typography fontSize={26} fontWeight={700}>
                            Google Drive
                        </Typography>
                        <Box sx={{
                            height: "50px",
                            width: "50px",
                            background: "#414141",
                            borderRadius: "100%"
                        }}>
                        </Box>
                    </Stack>


                    <Stack flex={1} flexGrow={1} flexDirection={"column"} justifyContent={"space-between"} >
                        <Box padding={8} flexGrow={1}>
                            <Table sx={{minWidth: "70vw"}} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell style={{fontSize: "20px", fontWeight: "400", color: "#414141"}}>
                                            File
                                        </TableCell>
                                        <TableCell style={{fontSize: "20px", fontWeight: "400", color: "#414141"}}>
                                            Owner
                                        </TableCell>
                                        <TableCell style={{fontSize: "20px", fontWeight: "400", color: "#414141"}}>
                                            Permissions
                                        </TableCell>
                                        <TableCell style={{fontSize: "20px", fontWeight: "400", color: "#414141"}}>
                                            Risks
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {items.map((item) => (
                                        <TableRow
                                            key={item.file}
                                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                        >
                                            <TableCell component="th" scope="row">
                                                <Typography fontSize={"16px"}>
                                                    {item.file}
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                <Typography fontSize={"16px"}>
                                                    {item.owner}
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                <Stack sx={{
                                                    flex: "1",
                                                    flexDirection: "row",
                                                    alignItems: "center",
                                                    gap: "12px"
                                                }}>
                                                    <PeopleOutline/>
                                                    <Typography fontSize={"16px"}>
                                                        {item.permissions}
                                                    </Typography>
                                                </Stack>
                                            </TableCell>
                                            <TableCell>
                                                <Stack sx={{
                                                    flex: "1",
                                                    flexDirection: "row",
                                                    alignItems: "center",
                                                    gap: "12px"
                                                }}>
                                                    {item.risk.icon}
                                                    <Typography fontSize={"16px"}>
                                                        {item.risk.label}
                                                    </Typography>
                                                </Stack>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                        <Stack gap={2} flex={1} justifyContent={"center"} alignItems={"center"} flexDirection={"row"}>
                            <ChevronLeft/>
                            <Typography fontSize={16}>1</Typography>
                            <Typography fontSize={16} fontWeight={600}>2</Typography>
                            <Typography fontSize={16}>3</Typography>
                            <ChevronRight/>
                        </Stack>

                    </Stack>
            </Grid>

        </Grid>
    )
}

export default App
