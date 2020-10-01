import React, {useState} from 'react';
import Slider from '@react-native-community/slider'
import styled from 'styled-components';
import {LinearGradient} from 'expo-linear-gradient';
import {ChevronIcon} from '../components/icons/chevron'
import {MoreVertIcon} from '../components/icons/moreVert'
import {PlayIcon} from '../components/icons/play'
import {ReplayIcon} from '../components/icons/replay'
import { ForwardIcon } from '../components/icons/foward';

const Background = ({children}) => {
    return(
        <LinearGradient 
            colors={['#464769', '#1B1A1F']}
            style={{
                flex: 1,
                paddingTop: 25
            }}>
            {children}
        </LinearGradient>
    )
};

const TopBar = styled.View`
    flex-direction: row;
`;

TopBar.Left = styled.View`
    flex: 1;
    padding: 16px;
`;

TopBar.Middle = styled.View`
    flex: 2;
    align-items: center
`;

TopBar.Right = styled.View`
    flex: 1;
    padding: 16px;
    align-items: flex-end;
`;

TopBar.Title = styled.Text`
    color: white;
    text-transform: uppercase;
`;
TopBar.SubTitle = styled.Text`
    color: white;
    font-weight: bold;
`;
//====================================

const ScreenArea = styled.View`
    flex: 1;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 32px;
`;

const CoverArea = styled.View`
    flex: 4;
`;

CoverArea.Image = styled.Image`
    width: 100%;
    flex: 1;
`;

const PlayerArea = styled.View`
    flex: 2;
    align-items: center;
    justify-content: flex-end;
`;

PlayerArea.Title = styled.Text`
    font-size: 20px;
    color: white;
`;

PlayerArea.Author = styled.Text`
    font-size: 16px;
    color: #bbb;
`;

const Controls = styled.View`
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin-top: 16px;
    flex-wrap: wrap;
`;

Controls.Play = styled.TouchableOpacity``;

Controls.Replay = styled.TouchableOpacity``;

Controls.Foward = styled.TouchableOpacity``;

Controls.Slider = styled.View`
    align-items: center;
    flex-basis: 100%;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
`;

Controls.Slider.CurrentTime = styled.Text`
    color: #bbb
`;

Controls.Slider.TotalTime = styled.Text`
    color: #bbb
`;

const AudioSlider = styled(Slider)`
    flex-basis: 100%;
`;

export function PlayerScreen() {
    const [segundos, setSegundos] = useState(0);

    return (
    <Background>
        <TopBar>
            <TopBar.Left>
                <ChevronIcon />
            </TopBar.Left>

            <TopBar.Middle>
                <TopBar.Title>Tocando podcast</TopBar.Title>
                <TopBar.SubTitle>esquadrilha da fumaça</TopBar.SubTitle>
            </TopBar.Middle>

            <TopBar.Right>
                <MoreVertIcon />
            </TopBar.Right>
        </TopBar>
        
        <ScreenArea>
            <CoverArea>
                <CoverArea.Image
                    source={{uri: "https://placehold.it/750x750"}}
                />
            </CoverArea>

            <PlayerArea>
                <PlayerArea.Title>
                    esquadafum em Amsterdã
                </PlayerArea.Title>

                <PlayerArea.Author>
                    esquadrilha da fumaça
                </PlayerArea.Author>

                <Controls>
                    <Controls.Slider>
                        <AudioSlider
                            minimumValue={0}
                            maximumValue={252}
                            minimumTrackTintColor="#1DD65F"
                            maximumTrackTintColor="#777"
                            thumbTintColor="white"
                            value={segundos}
                            onValueChange={(value) => {
                                setSegundos(value)
                            }}
                        />
                        
                        <Controls.Slider.CurrentTime>
                            0{(segundos/60).toFixed(2)}
                        </Controls.Slider.CurrentTime>

                        
                        <Controls.Slider.TotalTime>
                            04:20
                        </Controls.Slider.TotalTime>
                    </Controls.Slider>
                    
                    <Controls.Replay>
                        <ReplayIcon width={55} height={55}/>
                    </Controls.Replay>

                    <Controls.Play>
                        <PlayIcon width={95} height={95}/>
                    </Controls.Play>

                    <Controls.Foward>
                        <ForwardIcon width={55} height={55}/>
                    </Controls.Foward>
                </Controls>
            </PlayerArea>
        </ScreenArea>
    </Background>
    );
    }
