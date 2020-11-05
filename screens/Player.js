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
    padding-bottom: 20px;
`;

PlayerArea.Title = styled.Text`
    font-size: 25px;
    color: white;
`;

PlayerArea.Author = styled.Text`
    font-size: 18px;
    color: #bbb;
    padding-bottom: 10px;
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
                    resizeMode="contain"
                    source={{uri: "data:image/jpeg;base64,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"}}
                />
            </CoverArea>

            <PlayerArea>
                <PlayerArea.Title>
                    esquadrilha em amsterdã
                </PlayerArea.Title>

                <PlayerArea.Author>
                    esquadrilha da fumaça
                </PlayerArea.Author>

                <Controls>
                    <Controls.Slider>
                        <AudioSlider
                            minimumValue={0}
                            maximumValue={100}
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
